import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateImage } from '../utils/imageService';

export default function Skapa() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateImage = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const imageUrl = await generateImage(prompt);
      setImage(imageUrl);
    } catch (err) {
      setError('Ett fel uppstod vid bildgenereringen. Försök igen senare.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skapa AI-Genererade Bilder
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600">
            Använd kraften i FLUX.1 för att skapa unika och detaljerade bilder
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="mb-6">
            <label 
              htmlFor="prompt" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Beskriv din bild
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="T.ex: Astronaut i en djungel, kall färgpalett, dämpade färger, detaljerad, 8k"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              rows="4"
            />
          </div>

          <button
            onClick={handleGenerateImage}
            disabled={!prompt || isLoading}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-200 ${
              isLoading || !prompt
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Genererar...' : 'Skapa Bild'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Din Genererade Bild
            </h2>
            <div className="aspect-square w-full relative rounded-lg overflow-hidden">
              <img
                src={image}
                alt="AI-genererad bild"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Prompt: {prompt}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 