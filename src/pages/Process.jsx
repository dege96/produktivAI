import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Process = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();

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

  useEffect(() => {
    // Funktion för att scrolla till sektion
    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Vänta en kort stund för att säkerställa att sidan har renderats
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    scrollToSection();
  }, [location.hash]);

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
          Process
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Effektivisera din verksamhet med AI-integration
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Implementeringsprocess</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div id="implementering" className="space-y-6 scroll-mt-32">
            {[
              {
                step: 1,
                title: "Analys & Planering",
                description: "Vi börjar med en grundlig analys av era behov och mål. Detta inkluderar kartläggning av nuvarande processer och identifiering av områden där AI kan skapa mest värde. Vi säkerställer att all träningsdata är relevant, korrekt och representativ för att skapa tillförlitliga AI-modeller. Vi genomför grundliga riskbedömningar innan implementering av AI-system för att identifiera potentiella problem.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                step: 2,
                title: "Design & Utveckling",
                description: "Baserat på analysen utformar vi en skräddarsydd AI-lösning som integreras sömlöst med era befintliga system och arbetsflöden.Omfattande testning och validering av AI-modeller för att garantera precision och tillförlitlighet.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                step: 3,
                title: "Implementation & Utbildning",
                description: "Vi implementerar lösningen stegvis och utbildar era team i att använda och förvalta AI-systemen effektivt. Omfattande testning för att säkerställa att systemen fungerar rättvist och enligt etiska riktlinjer.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
              {
                step: 4,
                title: "Följ-uppföljning",
                description: "Vi säkerställer att AI-systemen fungerar optimalt och uppdaterar dem kontinuerligt för att passa era behov. Kontinuerlig övervakning och optimering av AI-systemens prestanda i produktionsmiljö.",
                color: "bg-purple-50 hover:bg-purple-100"
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Kvalitetsgarantier</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div id="kvalitetssakring" className="grid gap-6 md:grid-cols-2 scroll-mt-32">
            {[
              {
                title: "Noggrann Testning",
                description: "Omfattande testning av alla AI-funktioner för att säkerställa korrekt beteende.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Bias-kontroll",
                description: "Systematisk utvärdering och eliminering av oönskade bias i AI-systemen.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Dokumentation",
                description: "Detaljerad dokumentation av alla processer och beslut för full transparens.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
              {
                title: "Säkerhetskontroller",
                description: "Regelbundna säkerhetsutvärderingar för att skydda mot sårbarheter.",
                color: "bg-blue-50 hover:bg-blue-100"
              }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${guarantee.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{guarantee.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Våra Principer</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div id="ansvarsfull-ai" className="grid gap-6 md:grid-cols-2 scroll-mt-32">
            {[
              {
                title: "Transparens",
                description: "Vi är öppna med hur AI används och vilka beslut som fattas av AI-system.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Rättvisa",
                description: "Vi säkerställer att AI-system behandlar alla användare rättvist och utan diskriminering.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Integritet",
                description: "Vi skyddar användarnas personliga information och respekterar dataskyddsregler.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
              {
                title: "Ansvarighet",
                description: "Vi tar ansvar för AI-systemens beslut och deras konsekvenser.",
                color: "bg-blue-50 hover:bg-blue-100"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${principle.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Vårt Löfte</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            className="p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all duration-300 transform border border-gray-100 shadow-sm"
          >
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
              Vi är dedikerade till att leverera AI-lösningar av högsta kvalitet. 
              Genom noggrann testning, kontinuerlig övervakning och ständig förbättring 
              säkerställer vi att våra AI-system möter och överträffar era förväntningar.
            </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Process; 