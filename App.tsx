import React, { useState, useEffect } from 'react';
import { Activity, Lock, Shield, ChevronRight, Menu, X, Radio, Crosshair, BarChart3, Terminal, Mail, Phone, Copy, Check, ArrowUp } from 'lucide-react';
import { PACKAGES, NAV_LINKS } from './constants';
import { ClearanceLevel } from './types';
import { Analyzer } from './components/Analyzer';
import { PricingCard } from './components/PricingCard';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ Set-Blockstart: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f11] text-hl-text font-sans selection:bg-hl-orange selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f11]/90 backdrop-blur-sm border-b border-white/10 shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <Radio className="w-5 h-5 text-hl-orange animate-pulse" />
              <span className="font-mono font-bold text-xl tracking-tighter text-white">
                WELLIGKEIT<span className="text-hl-orange">.SYS</span>
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-mono text-sm text-gray-400 hover:text-hl-orange transition-colors relative group py-2"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-hl-orange">»</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0f11] border-b border-white/10 absolute w-full shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-mono font-medium text-gray-300 hover:text-hl-orange hover:bg-white/5 border-l-2 border-transparent hover:border-hl-orange transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="sector-c" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hl-orange/5 blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-hl-orange text-sm mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-hl-orange rounded-full animate-ping"></span>
            TRANSMISSION_ID: 0X-99
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            SECURE SIGNAL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hl-orange to-red-500">PROCESSING</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
            Operamos en las sombras del algoritmo. Welligkeit proporciona infraestructura de marketing táctico y despliegue de contenido de alta frecuencia para dominar el espacio de batalla digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="px-8 py-4 bg-hl-orange text-black font-mono font-bold hover:bg-orange-400 transition-colors flex items-center justify-center gap-2 clip-path-slant">
              INICIAR PROTOCOLO
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/5 transition-colors flex items-center justify-center clip-path-slant">
              SOLICITAR DIAGNÓSTICO
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Strip */}
      <div className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="font-mono text-2xl text-white font-bold">98.4%</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Success Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl text-white font-bold">24/7</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Monitoring</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl text-white font-bold">450+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Active Nodes</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl text-hl-orange font-bold flex items-center gap-2">
                SECURE <Lock className="w-4 h-4" />
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-24 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">CAPACIDADES OPERATIVAS</h2>
            <div className="w-24 h-1 bg-hl-orange"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 hover:border-hl-orange/50 transition-colors group">
              <Crosshair className="w-10 h-10 text-hl-orange mb-6 group-hover:rotate-90 transition-transform duration-500" />
              <h3 className="text-xl font-bold text-white mb-3 font-mono">IDENTIFICACIÓN DE BLANCOS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Análisis profundo de audiencia utilizando psicometría de datos para segmentar y atacar nichos de mercado con precisión quirúrgica.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:border-hl-orange/50 transition-colors group">
              <Terminal className="w-10 h-10 text-hl-orange mb-6" />
              <h3 className="text-xl font-bold text-white mb-3 font-mono">EJECUCIÓN DE CÓDIGO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollo de funnels de conversión automatizados y sistemas CRM que operan sin descanso para capturar y nutrir leads.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:border-hl-orange/50 transition-colors group">
              <BarChart3 className="w-10 h-10 text-hl-orange mb-6" />
              <h3 className="text-xl font-bold text-white mb-3 font-mono">INTELIGENCIA DE SEÑAL</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reportes detallados y análisis de métricas en tiempo real. Ajustamos la estrategia basándonos en datos duros, no en intuición.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic / Demo Section */}
      <section id="demo" className="py-24 relative bg-black/40 border-y border-white/5 scroll-mt-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="font-mono text-hl-orange text-sm mb-2">SYSTEM_DIAGNOSTIC_TOOL</div>
              <h2 className="text-3xl font-bold text-white">ANÁLISIS DE RESONANCIA</h2>
            </div>
            <div className="font-mono text-xs text-gray-500">
              HEURISTIC ENGINE V.4.0
            </div>
          </div>

          <Analyzer />

         </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="py-24 bg-[#0a0a0c] border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">NIVELES DE ACCESO</h2>
              <p className="text-gray-400 font-mono text-sm">Seleccione su protocolo de servicio</p>
            </div>
            <div className="font-mono text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
              ENCRYPTED CONNECTION ESTABLISHED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Terminal className="w-12 h-12 text-hl-orange mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold text-white mb-6">ESTABLECER COMUNICACIÓN</h2>
          <p className="text-gray-400 mb-10">
            Nuestros canales están abiertos pero encriptados. Haga clic en los bloques de datos a continuación para copiar las coordenadas de transmisión.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Block */}
            <div 
              onClick={() => copyToClipboard('Welligkeit247@gmail.com', 'email')}
              className="bg-white/5 border border-white/10 hover:border-hl-orange/50 hover:bg-white/10 p-6 cursor-pointer transition-all duration-300 group flex flex-col items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-hl-orange">
                {copiedField === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </div>
              <Mail className={`w-8 h-8 ${copiedField === 'email' ? 'text-green-500' : 'text-gray-400 group-hover:text-hl-orange'} transition-colors`} />
              <div className="text-center">
                <div className="text-xs font-mono text-gray-500 uppercase mb-1">Frecuencia de Correo</div>
                <div className="text-white font-mono text-sm sm:text-base break-all">Welligkeit247@gmail.com</div>
              </div>
              {copiedField === 'email' && (
                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="font-mono font-bold text-green-500 tracking-widest">COPIADO</span>
                </div>
              )}
            </div>

            {/* Phone Block */}
            <div 
              onClick={() => copyToClipboard('2616615671', 'phone')}
              className="bg-white/5 border border-white/10 hover:border-hl-orange/50 hover:bg-white/10 p-6 cursor-pointer transition-all duration-300 group flex flex-col items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-hl-orange">
                {copiedField === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </div>
              <Phone className={`w-8 h-8 ${copiedField === 'phone' ? 'text-green-500' : 'text-gray-400 group-hover:text-hl-orange'} transition-colors`} />
               <div className="text-center">
                <div className="text-xs font-mono text-gray-500 uppercase mb-1">Línea Segura</div>
                <div className="text-white font-mono text-sm sm:text-base">2616615671</div>
              </div>
               {copiedField === 'phone' && (
                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="font-mono font-bold text-green-500 tracking-widest">COPIADO</span>
                </div>
              )}
            </div>
          </div>

        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-hl-orange text-black rounded-sm shadow-[0_0_15px_rgba(255,148,0,0.5)] hover:bg-orange-400 transition-all duration-300 z-50 animate-bounce group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-gray-600" />
            <span className="font-mono text-gray-500 text-sm">
              WELLIGKEIT SYSTEM v2.4.1
            </span>
          </div>
          <div className="font-mono text-xs text-gray-600">
            © 2024 SIGNAL PROCESSING UNIT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
