from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn
import io
import base64
from PIL import Image
from utils.ai_models import ai_models

app = FastAPI()

# CORS-inställningar
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class TextRequest(BaseModel):
    messages: List[Message]

class ImageRequest(BaseModel):
    prompt: str

@app.post("/api/generate-text")
async def generate_text(request: TextRequest):
    try:
        response = ai_models.generate_text(request.messages)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/generate-image")
async def generate_image(request: ImageRequest):
    try:
        # Generera bild
        image = ai_models.generate_image(request.prompt)
        
        # Konvertera PIL Image till base64
        buffered = io.BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return {"image": f"data:image/png;base64,{img_str}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True) 