import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
          Kontakta Oss
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Vi hjälper dig att komma igång med AI-lösningar som passar just dina behov
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
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Kontaktinformation</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "E-post",
                info: "victordegeer96@gmail.com",
                description: "Vi svarar vanligtvis inom 24 timmar",
                color: "bg-blue-50 hover:bg-blue-100"
              },
              {
                title: "Telefon",
                info: "076 191 46 17",
                description: "Tillgängliga vardagar 9-17",
                color: "bg-emerald-50 hover:bg-emerald-100"

              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-8 ${contact.color} rounded-2xl transition-all duration-300 transform border border-gray-100`}
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-2xl font-medium text-blue-600 mb-2">{contact.info}</p>
                <p className="text-gray-600 leading-relaxed">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Skicka Meddelande</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>
          <motion.div
            className="p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all duration-300 transform border border-gray-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="Din e-postadress"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 h-32"
                  placeholder="Beskriv vad vi kan hjälpa dig med"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Skicka Meddelande
                </button>
              </div>
            </form>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 