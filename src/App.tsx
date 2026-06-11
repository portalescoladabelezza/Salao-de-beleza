import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  Sparkles, 
  Check, 
  Menu, 
  X, 
  Calendar, 
  ArrowRight, 
  Scissors, 
  Heart, 
  MessageSquare,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { salonConfig, getWhatsappLink } from "./config";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Control navbar opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set default scroll margin-top for simple navigation offsets
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.scrollMarginTop = "90px";
    });
  }, []);

  return (
    <div className="font-sans min-h-screen bg-brand-nude selection:bg-brand-pink selection:text-white">
      {/* 1. Header & Pre-Header */}
      <div className="bg-brand-dark text-brand-nude py-2.5 text-center text-xs tracking-wider font-medium relative z-50 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-6 font-sans">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            Sinta-se única, sinta-se bela no Bella Studio
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            Terça a Sábado • Horários agendados
          </span>
        </div>
      </div>

      <header 
        id="main-nav-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-brand-nude/90 backdrop-blur-md shadow-sm border-b border-neutral-200/50 py-3" 
            : "bg-brand-nude py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand area */}
          <a href="#inicio" className="flex flex-col select-none group">
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-brand-dark transition-colors duration-300 group-hover:text-brand-pink">
              {salonConfig.salonName}
            </h1>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-brand-pink uppercase font-semibold mt-0.5 ml-0.5">
              {salonConfig.tagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Início</a>
            <a href="#servicos" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Serviços</a>
            <a href="#pacotes" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Pacotes</a>
            <a href="#galeria" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Galeria</a>
            <a href="#sobre" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors">Contato</a>
          </nav>

          {/* Call To Action button on Desktop */}
          <div className="hidden md:block">
            <a 
              id="cta-nav-button"
              href={getWhatsappLink(salonConfig.cta.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-pink hover:bg-pink-hover text-brand-nude text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5" />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Icons shown on Mobile instead of complete text buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a 
              href={getWhatsappLink(salonConfig.cta.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar horário rápido"
              className="p-2 bg-brand-pink text-white rounded-full hover:bg-[#B57F72] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-neutral-800 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-nude border-b border-neutral-200 overflow-hidden relative z-30"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a 
                href="#inicio" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Início
              </a>
              <a 
                href="#servicos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Serviços
              </a>
              <a 
                href="#pacotes" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Pacotes
              </a>
              <a 
                href="#galeria" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Galeria
              </a>
              <a 
                href="#sobre" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Sobre
              </a>
              <a 
                href="#contato" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-pink border-b border-neutral-100"
              >
                Contato
              </a>
              <div className="pt-2">
                <a 
                  id="cta-mobile-menu-button"
                  href={getWhatsappLink(salonConfig.cta.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3.5 py-3.5 bg-brand-pink text-white font-medium rounded-xl text-sm"
                >
                  <Phone className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section */}
      <section id="inicio" className="relative py-12 lg:py-20 lg:min-h-[85vh] flex items-center bg-gradient-to-tr from-brand-nude via-brand-nude/80 to-brand-cream overflow-hidden">
        {/* Background decorative textures */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-60 bg-gradient-to-l from-brand-pink/5 to-transparent pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-44 h-44 rounded-full bg-brand-cream/30 blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Texts */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-3 py-1 bg-brand-pink/10 rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
                <span className="text-xs font-semibold text-brand-pink tracking-wider uppercase">Beleza &amp; Bem-Estar</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-brand-dark leading-tight"
              >
                Realce sua beleza com <span className="italic font-normal text-brand-pink">cuidado</span>, estilo e autoestima.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-600 sm:text-lg max-w-xl font-light leading-relaxed"
              >
                {salonConfig.hero.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
              >
                <a 
                  id="hero-ver-servicos-btn"
                  href="#servicos"
                  className="px-8 py-4 bg-brand-dark hover:bg-neutral-800 text-white text-center font-semibold rounded-lg transition-colors border border-transparent shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
                >
                  Ver Serviços
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a 
                  id="hero-agendar-agora-btn"
                  href={getWhatsappLink(salonConfig.cta.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-pink hover:bg-pink-hover text-brand-nude text-center font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  Agendar agora
                </a>
              </motion.div>

              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-300/40 w-full max-w-lg"
              >
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-pink">8+</h4>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mt-1">Especialidades</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-pink">100%</h4>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mt-1">Satisfeitas</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-pink">R$ 45+</h4>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mt-1">Preço Justo</p>
                </div>
              </motion.div>
            </div>

            {/* Premium Photo Hero side with beautiful frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              {/* Golden offset frame */}
              <div className="absolute inset-0 border border-brand-gold -m-3 mt-3 ml-3 rounded-2xl pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] bg-neutral-200">
                <img 
                  src={salonConfig.hero.primaryImg}
                  alt="Bella Studio Beauty Interior" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center text-brand-pink">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest">Cofiguração</p>
                      <p className="text-sm font-bold text-brand-dark">Ambiente Premium</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-green-500/10 text-green-700 uppercase rounded">Aberto</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Faixa de destaque (Infinite Ribbon style) */}
      <div className="bg-brand-dark text-brand-nude border-y border-brand-gold/20 py-4 overflow-hidden relative z-20">
        <div className="whitespace-nowrap flex gap-8 items-center justify-around animate-none py-1.5 px-4 font-serif italic text-sm tracking-wide sm:text-base selection:text-neutral-800">
          <div className="flex gap-4 sm:gap-8 items-center shrink-0">
            <span>Cabelo</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Escova</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Unhas</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Sobrancelhas</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Maquiagem</span>
            <span className="text-brand-gold not-italic">•</span>
            <span className="font-sans font-semibold not-italic uppercase tracking-widest text-brand-pink">Agendamento pelo WhatsApp</span>
          </div>
          <div className="hidden lg:flex gap-4 sm:gap-8 items-center shrink-0">
            <span className="text-brand-gold not-italic">•</span>
            <span>Cabelo</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Escova</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Unhas</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Sobrancelhas</span>
            <span className="text-brand-gold not-italic">•</span>
            <span>Maquiagem</span>
            <span className="text-brand-gold not-italic">•</span>
            <span className="font-sans font-semibold not-italic uppercase tracking-widest text-brand-pink">Agendamento pelo WhatsApp</span>
          </div>
        </div>
      </div>

      {/* 4. Seção de Serviços */}
      <section id="servicos" className="py-20 bg-brand-nude relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block mb-3">Tabela de Serviços</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark font-medium">Serviços de beleza</h3>
            <p className="text-neutral-500 font-light mt-3">
              Escolha seu serviço favorito e agende o horário ideal direto pelo WhatsApp de forma prática.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {salonConfig.services.map((svc) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/40 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image & Badge overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img 
                    src={svc.imageUrl} 
                    alt={svc.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent h-12 pointer-events-none" />
                  
                  {/* Label tag */}
                  <span className="absolute top-3.5 right-3.5 text-[9px] uppercase tracking-wider font-bold bg-brand-nude text-brand-dark px-2.5 py-1 rounded-full border border-neutral-200 shadow-sm">
                    {svc.tag}
                  </span>
                </div>

                {/* Info and action */}
                <div className="p-5 flex flex-col flex-grow text-left">
                  <h4 className="font-serif text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-pink transition-colors">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light line-clamp-2 leading-relaxed mb-4 flex-grow">
                    {svc.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 flex items-baseline justify-between mb-4">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Valor</span>
                    <span className="text-base font-bold text-brand-dark tracking-tight">{svc.price}</span>
                  </div>

                  <a 
                    id={`btn-agendar-servico-${svc.id}`}
                    href={getWhatsappLink(`Olá! Gostaria de agendar ${svc.name} no Bella Studio Beauty. Tem horário disponível?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-brand-dark hover:bg-brand-pink text-white text-xs font-semibold rounded-lg uppercase tracking-wider text-center transition-all duration-300 border-none block whitespace-nowrap"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-500 italic">
              *Se você não encontrar o serviço que procura nesta lista, entre em contato e consulte disponibilidade!
            </p>
          </div>
        </div>
      </section>

      {/* 5. Seção de Pacotes */}
      <section id="pacotes" className="py-20 bg-brand-nude relative z-10">
        <div className="absolute left-0 bottom-0 right-0 h-1/2 bg-brand-cream/30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block mb-3">Ofertas Especiais</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark font-medium">Pacotes especiais</h3>
            <p className="text-neutral-500 font-light mt-3">
              Preparamos as melhores combinações com valores promocionais para você se cuidar por completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonConfig.packages.map((pkg, idx) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <img 
                      src={pkg.imageUrl} 
                      alt={pkg.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                      Promoção
                    </div>
                  </div>

                  <div className="p-6 text-left">
                    <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">{pkg.name}</h4>
                    <p className="text-sm text-neutral-600 font-light mb-4">{pkg.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-left">
                  <div className="mb-4 bg-brand-nude p-3.5 rounded-xl flex items-center justify-between border border-neutral-200/30">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Total do Pacote</span>
                    <span className="text-xl font-bold text-brand-pink">{pkg.price}</span>
                  </div>

                  <a 
                    id={`btn-agendar-pacote-${pkg.id}`}
                    href={getWhatsappLink(`Olá! Gostaria de agendar o ${pkg.name} no Bella Studio Beauty. Tem horário disponível?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-brand-pink hover:bg-pink-hover text-brand-nude text-xs font-semibold uppercase tracking-wider text-center transition-all duration-300 rounded-lg block"
                  >
                    Agendar pacote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Seção Galeria (Resultados e inspirações) */}
      <section id="galeria" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block mb-3">Nossas Clientes</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark font-medium">Resultados e inspirações</h3>
            <p className="text-neutral-500 font-light mt-3">
              Veja alguns estilos, cuidados e produções impecáveis realizadas em nossa recepção e salão.
            </p>
          </div>

          {/* Grid Layout (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonConfig.gallery.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item.imageUrl)}
                className="relative overflow-hidden rounded-2xl group cursor-zoom-in aspect-square shadow-sm hover:shadow-md transition-all duration-300 bg-neutral-100"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating overlay visible on hover */}
                <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 mt-1 flex items-center gap-1">
                    Clique para ampliar
                    <ChevronRight className="w-3 h-3" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-neutral-300 p-2 focus:outline-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar ampliação"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl"
            >
              <img 
                src={selectedImage} 
                alt="Resultado copiado" 
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[85vh] object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Seção “Como agendar” (Passo a passo) */}
      <section className="py-20 bg-brand-cream/50 relative z-10 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block mb-3">Sem Complicação</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark font-medium">Como agendar seu horário</h3>
            <p className="text-neutral-500 font-light mt-3">
              Basta seguir estes passos rápidos para garantir seu atendimento exclusivo em nosso salão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal connection line on desktop */}
            <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-brand-gold/40 z-0 pointer-events-none" />

            {salonConfig.bookingSteps.map((step) => (
              <div key={step.step} className="text-center flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-white border border-brand-gold/30 flex items-center justify-center font-serif text-lg font-bold text-brand-pink shadow-sm mb-6">
                  {step.step}
                </div>
                <h4 className="font-serif text-base font-bold text-brand-dark mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-[200px] sm:max-w-none">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seção sobre o Salão */}
      <section id="sobre" className="py-20 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Beautiful stacked photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-100 shadow-sm relative group">
                  <img 
                     src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80" 
                    alt="Profissional do estúdio" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none" />
                </div>
                <div className="rounded-2xl bg-brand-pink/10 aspect-square flex flex-col justify-center items-center text-center p-4 border border-brand-pink/20">
                  <Heart className="w-7 h-7 text-brand-pink mb-2 animate-pulse" />
                  <p className="font-serif text-base font-bold text-brand-dark">Autoestima</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Sua nova versão</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-10">
                <div className="rounded-2xl bg-brand-gold/15 aspect-square flex flex-col justify-center items-center text-center p-4 border border-brand-gold/20">
                  <Check className="w-7 h-7 text-brand-gold mb-2" />
                  <p className="font-serif text-base font-bold text-brand-dark">Confiança</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Equipe Especialista</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-100 shadow-sm relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80" 
                    alt="Salão ambiente de beleza" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column - Story and list */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block">Seu Refúgio de Cuidados</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark font-medium leading-tight select-none">
                {salonConfig.about.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {salonConfig.about.description}
              </p>

              {/* Differentials Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-4 border-t border-neutral-100">
                {salonConfig.about.differentials.map((diff) => (
                  <div key={diff} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center text-brand-pink shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-brand-dark">{diff}</span>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp block */}
              <div className="pt-6">
                <a 
                  id="btn-sobre-contato"
                  href={getWhatsappLink(salonConfig.cta.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-dark hover:bg-brand-pink text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-colors duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Quero Conhecer o Salão
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Seção Chamada para WhatsApp (Full-width custom styling with parallax feel) */}
      <section className="bg-gradient-to-br from-brand-dark via-neutral-800 to-brand-dark text-brand-nude py-20 relative overflow-hidden z-10 text-center px-4">
        {/* Background visual shapes */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-brand-gold animate-bounce" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <Sparkles className="w-8 h-8 text-brand-gold mx-auto animate-pulse" />
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight">
            {salonConfig.cta.title}
          </h3>
          <p className="text-neutral-400 font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {salonConfig.cta.text}
          </p>

          <div className="pt-4">
            <a 
              id="cta-whatsapp-section-btn"
              href={getWhatsappLink(salonConfig.cta.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink hover:bg-pink-hover text-brand-nude font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              {salonConfig.cta.buttonText}
            </a>
          </div>

          <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-6">
            Confirmação de horário 100% online • Sem taxas ocultas
          </p>
        </div>
      </section>

      {/* 10. Funcionamento e localização */}
      <section id="contato" className="py-20 bg-brand-nude relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Address, contacts, schedules list */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
              <div>
                <span className="text-xs font-bold text-brand-pink tracking-[0.25em] uppercase block mb-3">Onde nos Encontrar</span>
                <h3 className="font-serif text-3xl text-brand-dark font-medium">Horário e localização</h3>
                <p className="text-neutral-500 font-light mt-2 leading-relaxed">
                  Espaço muito bem localizado com estacionamento fácil e ambientes climatizados ideais para você.
                </p>
              </div>

              {/* Working Hours Cards */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-dark border-b border-neutral-200 pb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-pink" />
                  Horários de Atendimento
                </h4>
                
                <div className="space-y-2.5">
                  {salonConfig.businessHours.map((bh) => (
                    <div key={bh.day} className="flex justify-between items-center text-sm">
                      <span className="text-neutral-600 font-medium">{bh.day}</span>
                      <span className="text-brand-dark font-semibold bg-neutral-200/40 px-2.5 py-0.5 rounded text-xs">{bh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address detail */}
              <div className="p-4 rounded-xl bg-white border border-neutral-200/50 space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-dark flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-pink" />
                  Endereço do Estúdio
                </h4>
                <p className="text-sm text-neutral-600 font-light">
                  {salonConfig.address} <br />
                  <span className="font-medium text-brand-dark">{salonConfig.city}</span>
                </p>
                <p className="text-xs text-brand-pink font-semibold mt-1">
                  Atendimento: Com agendamento pelo WhatsApp
                </p>
              </div>

              {/* Interactive buttons */}
              <div className="pt-2">
                <a 
                  id="btn-como-chegar"
                  href={salonConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-brand-dark font-semibold rounded-lg text-xs uppercase tracking-widest border border-neutral-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Como chegar
                </a>
              </div>
            </div>

            {/* Nice representation Map frame layout placeholder but premium */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="w-full h-full min-h-[300px] sm:min-h-[380px] bg-brand-cream/45 rounded-2xl relative overflow-hidden border border-neutral-300/40 group shadow-md p-2">
                <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none z-10" />
                
                {/* Embed OpenStreetMap layout or stylized static preview of location */}
                <div className="w-full h-full rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-pink/15 flex items-center justify-center text-brand-pink animate-pulse">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg font-bold text-brand-dark mb-1">
                      {salonConfig.salonName}
                    </h5>
                    <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                      {salonConfig.address} • {salonConfig.city}
                    </p>
                  </div>
                  
                  <div className="pt-2 max-w-sm">
                    <a 
                      href={salonConfig.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark hover:bg-brand-pink text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>

                  <p className="text-[10px] text-neutral-400 italic">
                    Estamos localizados na área nobre, com excelente acessibilidade e segurança.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Footer Layout */}
      <footer className="bg-brand-dark text-brand-nude pt-16 pb-12 border-t border-brand-gold/15 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand/About */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-2xl font-bold tracking-wide text-white">
              {salonConfig.salonName}
            </h4>
            <span className="text-[9px] tracking-[0.25em] text-brand-gold uppercase font-bold block">
              {salonConfig.tagline}
            </span>
            <p className="text-neutral-400 font-light text-xs max-w-sm leading-relaxed pt-2">
              Cabelo, unhas, sobrancelhas, maquiagem e beleza com atendimento personalizado, requinte e horário agendado pronto pelo WhatsApp.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs uppercase tracking-[0.2em] text-brand-nude font-bold">Navegação</h5>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li><a href="#inicio" className="hover:text-brand-pink transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-brand-pink transition-colors">Serviços</a></li>
              <li><a href="#pacotes" className="hover:text-brand-nude transition-colors">Pacotes Especiais</a></li>
              <li><a href="#galeria" className="hover:text-brand-pink transition-colors">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-brand-pink transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-brand-pink transition-colors">Funcionamento &amp; Endereço</a></li>
            </ul>
          </div>

          {/* Contact Details / Social networks */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs uppercase tracking-[0.2em] text-brand-nude font-bold">Redes Sociais</h5>
            <p className="text-xs text-neutral-400 font-light">
              Diga olá nas redes sociais ou nos envie fotos das suas inspirações de cortes!
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href={`https://instagram.com/${salonConfig.instagramUser}`}
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram Bella Studio"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-brand-pink flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://facebook.com/${salonConfig.facebookUser}`} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook Bella Studio"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-brand-pink flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsappLink(salonConfig.cta.defaultMessage)}
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp Bella Studio"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-brand-pink flex items-center justify-center text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500">
              <p>📍 {salonConfig.address}</p>
              <p className="mt-1">📞 Tel / Cel: +55 (21) 96906-0505</p>
            </div>
          </div>

        </div>

        {/* Copyright sub-footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-800 text-center text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} {salonConfig.salonName}. Todos os direitos reservados.</p>
          <p className="mt-1">Agendamento rápido • Serviços Estéticos de Cabeleireiros e Esteticistas.</p>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <motion.a 
        id="whatsapp-floating-button"
        href={getWhatsappLink(salonConfig.cta.defaultMessage)}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-green-500/30 transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute right-full mr-3.5 bg-black/80 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Falar Conosco
        </span>
        <Phone className="w-7 h-7" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] animate-ping" />
      </motion.a>
    </div>
  );
}
