import { useState } from 'react';
import { motion } from 'framer-motion';

const PromptEngineering = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-medium text-gray-900 mb-4">
          Tips för användning av AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Optimera dina AI-interaktioner för bättre resultat
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-24"
      >
        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Tydliga instruktioner ger bättre resultat</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Tydliga Instruktioner",
                description: "Vi hjälper dig att formulera tydliga och effektiva instruktioner som ger konsistenta och användbara svar från AI.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Kontexthantering",
                description: "Lär dig hur du effektivt kommunicerar kontext och bakgrundsinformation för mer precisa resultat.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${item.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Bästa Praxis</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Var Specifik",
                description: "Ju mer specifik och detaljerad din prompt är, desto bättre blir resultatet. Inkludera relevant kontext och önskade format.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                step: 2,
                title: "Iterativ Förbättring",
                description: "Använd en stegvis process för att förfina och förbättra dina prompts baserat på resultaten.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                step: 3,
                title: "Testa och Validera",
                description: "Verifiera att prompten ger konsistenta och användbara resultat över olika scenarier.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${item.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
              >
                <div className="flex items-start space-x-6">
                  <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-medium shrink-0 shadow-sm border border-gray-100">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Våra Tjänster</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Kurser i prompt engineering",
                description: "Workshops för att lära dig hur du kan optimera dina prompts för snabbare och bättre resultat.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${service.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
              >
                <div className="flex items-start space-x-6">
                  <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-medium shrink-0 shadow-sm border border-gray-100">
                    {service.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </motion.div>
  );
};

export default PromptEngineering; 