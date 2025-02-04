import { useState } from 'react';
import { motion } from 'framer-motion';

const ChatGPT = () => {
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
          ChatGPT Integration
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Förbättra din verksamhet med intelligent konversations-AI
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Huvudfunktioner</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Naturlig Konversation",
                description: "Avancerad språkförståelse för naturliga och kontextuella dialoger.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Anpassningsbar",
                description: "Skräddarsydd integration för dina specifika verksamhetsbehov.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Flerspråkig",
                description: "Stöd för flera språk för global kommunikation.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
              {
                title: "Skalbar",
                description: "Hantera tusentals samtidiga konversationer effektivt.",
                color: "bg-blue-50 hover:bg-blue-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Användningsområden</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Kundservice",
                description: "Automatiserad support dygnet runt med snabba och precisa svar på vanliga frågor.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                step: 2,
                title: "Säljstöd",
                description: "Kvalificering av leads och personaliserad kommunikation med potentiella kunder.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                step: 3,
                title: "Intern Support",
                description: "Effektiv hantering av interna frågor och kunskapsdelning inom organisationen.",
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Fördelar</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            className="p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all duration-300 transform border border-gray-100 shadow-sm"
          >
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
              Genom att integrera ChatGPT i din verksamhet kan du automatisera rutinuppgifter, 
              förbättra kundupplevelsen och frigöra värdefull tid för ditt team att fokusera på 
              strategiskt viktiga uppgifter. Vår expertis säkerställer en smidig implementation 
              och optimalt värde från din AI-investering.
            </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default ChatGPT; 