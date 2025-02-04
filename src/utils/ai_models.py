from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
from diffusers import DiffusionPipeline
import torch

class AIModels:
    def __init__(self):
        # Initialisera text-generering
        self.text_pipeline = pipeline(
            "text-generation",
            model="deepseek-ai/DeepSeek-R1",
            trust_remote_code=True
        )
        
        # Initialisera bildgenerering
        self.image_pipeline = DiffusionPipeline.from_pretrained(
            "black-forest-labs/FLUX.1-dev",
            torch_dtype=torch.float16
        )
        
        if torch.cuda.is_available():
            self.image_pipeline = self.image_pipeline.to("cuda")
    
    def generate_text(self, messages):
        try:
            # Formatera meddelanden till en sträng
            prompt = "\n".join([f"{m['role']}: {m['content']}" for m in messages])
            
            # Generera text
            response = self.text_pipeline(
                prompt,
                max_new_tokens=250,
                do_sample=True,
                temperature=0.7
            )
            
            return response[0]['generated_text']
        except Exception as e:
            print(f"Error generating text: {e}")
            raise
    
    def generate_image(self, prompt):
        try:
            # Generera bild
            image = self.image_pipeline(prompt).images[0]
            return image
        except Exception as e:
            print(f"Error generating image: {e}")
            raise

# Skapa en global instans
ai_models = AIModels() 