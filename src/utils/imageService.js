// Funktion för att generera bild med FLUX.1
export async function generateImage(prompt) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_HUGGING_FACE_API_KEY}`
        },
        body: JSON.stringify({ 
          inputs: prompt,
          options: {
            wait_for_model: true
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error('Kunde inte generera bilden');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
} 