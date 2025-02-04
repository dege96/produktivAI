import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCases = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

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

  const expandContent = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    show: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };

  const sections = [
    {
      id: 'leadgen',
      title: 'Leadgenerering och kvalificering',
      shortDesc: 'Automatiserad leadgenerering och kvalificering med AI',
      content: `Traditionellt har leadgenerering involverat tidskrävande manuella processer som kallsamtal, 
      e-postutskick och dataanalys. AI kan revolutionera denna process genom att automatisera 
      leadgenerering och kvalificeringsuppgifter. Genom att integrera AI i dina system kan du 
      engagera potentiella kunder på din webbplats eller genom meddelandeplattformar.

      AI kan proaktivt initiera konversationer, ställa riktade frågor och samla in viktig 
      information från potentiella kunder. Den kan hjälpa till att identifiera prospects som är mer 
      benägna att konvertera genom att använda sin naturliga språkförståelse för att analysera svar 
      och bedöma potentiellt intresse.`
    },
    {
      id: 'automation',
      title: 'Automatisering av personliga kundinteraktioner',
      shortDesc: 'Personaliserad kundkommunikation med AI-stöd',
      content: `Personliga interaktioner är avgörande för att bygga starka relationer och driva kundlojalitet. 
      AI kan spela en viktig roll i att automatisera dessa interaktioner samtidigt som den 
      personliga touchen behålls.

      Med AI kan du automatisera chattbaserad kundsupport, ge omedelbara svar på vanliga 
      frågor och förfrågningar. AI kan använda sin kontextuella förståelse för att engagera 
      sig i dynamiska konversationer och säkerställa en personlig upplevelse för varje kund.`
    },
    {
      id: 'support',
      title: 'Effektivisering av supportärenden',
      shortDesc: 'Smart hantering av kundsupportärenden',
      content: `Hantering av supportärenden kan ofta vara tidskrävande, särskilt när man står inför 
      många samtidiga förfrågningar. Här kan AI-drivna system spela en viktig roll. Dessa 
      är designade för att hantera grundläggande och repetitiva kundfrågor, vilket 
      låter dina supportagenter prioritera högvärdesuppgifter och fördjupa sig i mer komplexa ärenden.

      AI-drivna system är utrustade med Natural Language Processing (NLP) algoritmer som gör 
      att de intelligent kan förstå och analysera kunders ärenden.`
    },
    {
      id: 'project',
      title: 'Uppgiftsfördelning och projekthantering',
      shortDesc: 'AI-driven projektledning och resursallokering',
      content: `AI kan användas för att förenkla och effektivisera uppgiftsfördelning och hantering. 
      Genom att utnyttja AI kan projektledare automatisera processen att tilldela uppgifter och 
      säkerställa att rätt uppgifter tilldelas rätt teammedlemmar i rätt tid.

      AI kan förstå och analysera projektkrav, resurser och teammedlemmars kompetenser. 
      Baserat på dessa inputs kan den föreslå de mest lämpliga personerna för specifika uppgifter, 
      med hänsyn till deras tillgänglighet och expertis. Detta låter projektledare fatta 
      välgrundade beslut vid delegering av ansvar.

      Dessutom kan AI hjälpa till att övervaka uppgifternas framsteg. Genom integration med 
      projekthanteringsplattformar kan AI ge realtidsuppdateringar om uppgifternas slutförande, 
      deadlines och potentiella hinder.`
    }
  ];

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
          Användningsområden för AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upptäck hur AI kan transformera din verksamhet
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Automatisering & Optimering</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Automatisering av rutinuppgifter",
                description: "Automatiserar repetitiva och tidskrävande uppgifter, som datahantering och e-postkommunikation.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Optimering av arbetsflöden",
                description: "Förbättrar och effektiviserar arbetsflöden genom att identifiera flaskhalsar och föreslå förbättringar.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Effektiv resursallokering",
                description: "AI används för att optimera fördelning av resurser baserat på arbetsbelastning och kompetens.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
              {
                title: "Förbättrad resursplanering",
                description: "AI-algoritmer för att förutse och optimera användning av personal, material och utrustning.",
                color: "bg-blue-50 hover:bg-blue-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Datahantering & Analys</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Prediktiv analys",
                description: "Användning av AI för att förutse framtida trender och händelser genom att analysera historiska data.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Datahantering",
                description: "Organisering och kategorisering av digitala filer och dokument för enklare åtkomst och användning.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Innehållshantering & Skapande</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Skriv- och redigeringsstöd",
                description: "Förslag på förbättring av texter, korrekturläsning och hjälp med utkast till e-post och rapporter.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Innehållsskapande",
                description: "AI kan hjälpa med idéer för blogg- och sociala medieinlägg samt marknadsföringsmaterial.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Kunskapsinhämtning",
                description: "AI ger snabb åtkomst till information, definitioner och förklaringar, vilket underlättar informationssökning.",
                color: "bg-cyan-50 hover:bg-cyan-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Försäljning & Marknadsföring</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Leadgenerering",
                description: "Automatiserad kvalificering och hantering av leads via intelligenta konversationer och chatbots.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Personalisering",
                description: "Skräddarsydd kommunikation och marknadsföring baserat på kundens individuella behov och preferenser.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Kundservice & Support</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="p-8 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all duration-300 transform border border-gray-100"
            >
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Intelligent Kundsupport</h3>
                <p className="text-gray-600 leading-relaxed">
                  Omedelbar respons på vanliga kundfrågor genom avancerad språkförståelse och chatbots.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Projektledning</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Uppgiftshantering",
                description: "AI kan smart fördela och övervaka projektuppgifter baserat på kompetens, arbetsbörda och tillgänglighet.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Samarbete",
                description: "Förbättrad kommunikation och kunskapsdelning i team genom AI-baserade verktyg och plattformar.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Effektivisering & Planering</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Schemaläggning",
                description: "Virtuella assistenter som hanterar uppgifter, deadlines, möten och påminnelser för att hålla projekt på spår.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Tidshantering",
                description: "AI hjälper till att prioritera uppgifter, hantera tidslinjer och skapa effektiva att-göra-listor.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Utbildning & Utveckling</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Introduktion",
                description: "AI kan användas som utbildningsresurs vid introduktion av nyanställda, vilket hjälper dem att förstå företagets processer och riktlinjer.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Teamutveckling",
                description: "AI kan hjälpa till att skapa idéer för teambyggande aktiviteter och förbättra samarbetet inom teamet.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${feature.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Teknisk Support</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="p-8 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all duration-300 transform border border-gray-100"
            >
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Kodningstips och felsökning</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI kan assistera utvecklingsteam med tekniska förklaringar, kodtips och felsökning.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default UseCases; 