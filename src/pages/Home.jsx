import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [text, setText] = useState('företag');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['företag', 'produktivitet', 'struktur', 'workflow', 'framtiden'];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText || '\u200B');

    if (isDeleting) {
      setDelta(30);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

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
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-lösningar för{' '}
          <span className="gradient-text relative inline-block min-h-[1.2em] pb-1">
            {text}
            <span className="absolute -right-1 top-0 h-full w-1 bg-transparent animate-blink"></span>
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Vi hjälper företag att implementera och optimera AI-lösningar för ökad effektivitet och innovation.
        </p>
        <div className="space-x-4">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Kom igång
          </Link>
          <Link
            to="/use-cases"
            className="inline-block bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Varför AI?
          </Link>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-24"
      >
        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Våra Tjänster</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Kvalitetssäkring",
                description: "Säkerställ högsta kvalitet i dina AI-lösningar genom omfattande testning och validering.",
                color: "bg-blue-50 hover:bg-blue-100",
                link: "/quality-assurance"
              },
              {
                title: "Implementering",
                description: "Strategisk implementation av AI-lösningar anpassade efter din verksamhets behov.",
                color: "bg-emerald-50 hover:bg-emerald-100",
                link: "/strategic-implementation"
              },
              {
                title: "Ansvarsfull AI",
                description: "Utveckla och implementera AI på ett etiskt och ansvarsfullt sätt.",
                color: "bg-cyan-50 hover:bg-cyan-100",
                link: "/responsible-use"
              },
              {
                title: "Prompt Engineering",
                description: "Optimera dina AI-interaktioner för bättre och mer precisa resultat.",
                color: "bg-blue-50 hover:bg-blue-100",
                link: "/prompt-engineering"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${service.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Link to={service.link} className="block">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Varför Välja Oss</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Expertis",
                description: "Djupgående kunskap inom AI och maskininlärning.",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Erfarenhet",
                description: "Lång erfarenhet av framgångsrika AI-implementeringar.",
                color: "bg-emerald-50 hover:bg-emerald-100"
              },
              {
                title: "Support",
                description: "Omfattande support och vägledning genom hela processen.",
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
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Kom Igång</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            className="p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all duration-300 transform border border-gray-100 shadow-sm text-center"
          >
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg mb-8">
              Ta första steget mot en mer intelligent och effektiv verksamhet. 
              Kontakta oss för en kostnadsfri konsultation där vi diskuterar hur 
              vi kan hjälpa just er att dra nytta av AI:s fulla potential.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Kontakta Oss
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Home; 