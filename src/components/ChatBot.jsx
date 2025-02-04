import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAIResponse } from '../utils/aiService';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hej! Jag är din AI-assistent. Hur kan jag hjälpa dig idag?<br><br>
       
Du kan bland annat fråga mig om:<br>
• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="implementering">Strategisk AI-implementering</a><br>
• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="användningsområden">Användningsområden för AI</a><br>
• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="tips">Tips hur du använder AI</a><br>
• <a href="#" onclick="return false" class="text-blue-600 hover:underline" data-ai-area="ansvarsfull">Ansvarsfull AI-användning</a> <br>

<br>

Du når oss även via <a href="mailto:victordegeer96@gmail.com" class="text-blue-600 hover:underline">victordegeer96@gmail.com</a> eller vår <a href="/contact" class="text-blue-600 hover:underline">kontaktsida</a>.`
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Funktion för att säkert rendera HTML
  const createMarkup = (html) => {
    return { __html: html };
  };

  // Hantera klick på AI-områdeslänkar
  const handleAIAreaClick = async (event) => {
    const area = event.target.getAttribute('data-ai-area');
    if (area) {
      setIsLoading(true);
      try {
        const response = await getAIResponse(area);
        if (response) {
          setMessages(prev => [...prev, {
            role: "user",
            content: `Berätta mer om ${event.target.textContent}`
          }, {
            role: "assistant",
            content: response
          }]);
        }
      } catch (error) {
        console.error('Error handling AI area click:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: "user",
      content: inputValue.trim()
    };

    console.log('Starting chat submission with:', userMessage);
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Calling getAIResponse with:', userMessage.content);
      const response = await getAIResponse(userMessage.content);
      console.log('Received AI response:', response);
      
      if (response) {
        console.log('Adding AI response to messages');
        setMessages(prev => [...prev, {
          role: "assistant",
          content: response
        }]);
      } else {
        console.error('No response received from AI');
        throw new Error('Inget svar mottogs från AI');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Jag kunde tyvärr inte processa din förfrågan just nu. Vänligen försök igen om en stund eller kontakta oss via mejl."
      }]);
    } finally {
      console.log('Chat submission completed');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl mb-4 w-96 max-h-[600px] flex flex-col"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Chat med AI</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div 
                        dangerouslySetInnerHTML={createMarkup(message.content)} 
                        className="message-content"
                        onClick={handleAIAreaClick}
                      />
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-800">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Skriv ett meddelande..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    !inputValue.trim() || isLoading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Skicka
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen 
              ? "M6 18L18 6M6 6l12 12"
              : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            }
          />
        </svg>
      </motion.button>
    </div>
  );
} 