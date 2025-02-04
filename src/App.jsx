import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Process from './pages/Process';
import PromptEngineering from './pages/PromptEngineering';
import UseCases from './pages/UseCases';
import Contact from './pages/Contact';
import Skapa from './pages/Skapa';
import ChatBot from './components/ChatBot';

// ScrollToTop komponent som scrollar till toppen vid navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        {/* Modern Navigation */}
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="container">
            <div className="flex justify-between h-20 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold gradient-text">
                  produktivAI
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center space-x-8">
                  <NavLink to="/" className="py-2">Hem</NavLink>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <NavLink to="/process" className="py-2 inline-flex items-center">
                      Process
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                  
                    <div 
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
                        isDropdownOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <Link to="/process#implementering" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                        Implementering
                      </Link>
                      <Link to="/process#kvalitetssakring" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                        Kvalitetssäkring
                      </Link>
                      <Link to="/process#ansvarsfull-ai" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                        Ansvarsfull AI
                      </Link>
                    </div>
                  </div>

                  <NavLink to="/use-cases" className="py-2">Användning</NavLink>
                  <NavLink to="/prompt-engineering" className="py-2">Tips</NavLink>
                  <NavLink to="/skapa" className="py-2">Skapa</NavLink>
                  <Link 
                    to="/contact" 
                    className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
            <div className="container py-6">
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-3 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                  Hem
                </Link>
                <div className="px-4 py-2">
                  <div className="font-semibold text-gray-800 mb-2">AI-tjänster</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/process" className="block py-2 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                      Process
                    </Link>
                    <Link to="/process#kvalitetssakring" className="block py-2 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                      Kvalitetssäkring
                    </Link>
                    <Link to="/process#ansvarsfull-ai" className="block py-2 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                      Ansvarsfull AI
                    </Link>
                  </div>
                </div>
                <Link to="/use-cases" className="block px-4 py-3 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                  Användning
                </Link>
                <Link to="/prompt-engineering" className="block px-4 py-3 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                  Tips
                </Link>
                <Link to="/skapa" className="block px-4 py-3 text-lg hover:bg-gray-50 rounded-lg transition-colors">
                  Skapa
                </Link>
                <Link 
                  to="/contact" 
                  className="mx-4 mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/process" element={<Process />} />
              <Route path="/prompt-engineering" element={<PromptEngineering />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skapa" element={<Skapa />} />
            </Routes>
          </div>
        </main>

        <ChatBot />

        {/* Modern Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="container">
            <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Om Oss</h3>
                <p className="text-gray-400 leading-relaxed">
                  Vi hjälper företag att implementera och optimera AI-lösningar på ett ansvarsfullt sätt.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Kontakt</h3>
                <div className="space-y-2">
                  <p className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@aicontent.se</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>08-123 45 67</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Följ Oss</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="py-6 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} produktivAI. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
