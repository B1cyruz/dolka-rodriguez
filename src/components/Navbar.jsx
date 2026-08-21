import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Sparkles, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Galería", path: "/galeria" },
    { label: "Cotización", path: "/cotizacion" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-rose/20">
      {/* Top Banner Bar */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4 text-gray-300">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              +57 300 279 5084
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              Taller de Modistería & Alta Costura
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-brand-gold font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Citas previas disponibles
            </span>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/logo.jpg"
                alt="Dolka Rodriguez Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brand-gold object-cover shadow-md group-hover:scale-105 transition duration-300"
              />
              <span className="absolute -bottom-1 -right-1 bg-brand-gold text-white p-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
              </span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-dark block group-hover:text-brand-gold transition duration-300">
                Dolka Rodríguez
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest text-brand-dark-light uppercase font-medium block">
                Diseños & Modistería
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 relative ${
                    isActive
                      ? "bg-brand-rose/30 text-brand-dark font-semibold shadow-inner"
                      : "text-gray-700 hover:bg-brand-cream-dark hover:text-brand-dark"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/cotizacion"
              className="ml-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-brand-dark" />
              Pedir Cotización
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-cream-dark focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-rose/20 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive
                    ? "bg-brand-rose/30 text-brand-dark font-bold"
                    : "text-gray-700 hover:bg-brand-cream"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/cotizacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-brand-gold text-brand-dark font-bold px-4 py-3 rounded-xl shadow-md text-base"
          >
            Pedir Cotización
          </Link>
        </div>
      )}
    </header>
  );
}