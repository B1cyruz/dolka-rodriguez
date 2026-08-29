import { useState } from "react";
import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "¿Con cuánto tiempo de anticipación debo mandar a hacer mi vestido de gala o novia?",
      a: "Para vestidos de novia y quinceañeras recomendamos entre 3 a 6 semanas de anticipación para realizar las 2-3 pruebas de ajuste de medidas. Para vestidos de gala y coctel, entre 1 y 2 semanas.",
    },
    {
      q: "¿Puedo llevar mi propia tela o ustedes la suministran?",
      a: "¡Ambas opciones son posibles! Puedes traer tu propia tela de preferencia o nosotras te asesoramos y cotizamos la prenda incluyendo textiles premium de nuestro taller.",
    },
    {
      q: "¿Cómo funcionan las pruebas de ajuste?",
      a: "Una vez recortada y hilvanada la prenda, agendamos una cita en nuestro taller para verificar escotes, caída, largo e imperio. Hacemos los ajustes necesarios antes de realizar el cosido definitivo.",
    },
    {
      q: "¿Hacen arreglos de ropa no confeccionada en su taller?",
      a: "Sí, realizamos arreglos de alta modistería como bastas, ajustes de talle, cambio de cierres, entalles y transformaciones de diseño.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-rose-light text-brand-dark font-medium text-xs border border-brand-rose/40">
          <Sparkles className="w-4 h-4 text-brand-gold-dark" />
          <span>Taller y atención personalizada</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
          Página de contacto y citas
        </h1>
        <p className="text-gray-600 text-base">
          Nos encontramos listos para atenderte. Visita nuestro taller de modistería o contáctanos por teléfono o WhatsApp para agendar tu cita de asesoría.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/30 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-dark flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-gold-dark" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif font-bold text-lg text-brand-dark truncate">Teléfono & Citas</h3>
            <p className="text-xs text-gray-500 mt-1">Llámanos directamente:</p>
            <a href="tel:+573000000000" className="text-sm font-semibold text-brand-dark hover:text-brand-gold-dark block mt-1 truncate">
              +57 300 279 5084
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/30 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif font-bold text-lg text-brand-dark truncate">WhatsApp Directo</h3>
            <p className="text-xs text-gray-500 mt-1">Respuesta rápida:</p>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 block mt-1 truncate"
            >
              Iniciar Chat
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/30 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-dark flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-brand-gold-dark" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif font-bold text-lg text-brand-dark truncate">Correo Electrónico</h3>
            <p className="text-xs text-gray-500 mt-1">Escríbenos tu inquietud:</p>
            <a 
              href="mailto:contacto@dolkarodriguez.com" 
              title="contacto@dolkarodriguez.com"
              className="text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-gold-dark block mt-1 truncate"
            >
              dolka36@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/30 flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-dark flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-brand-gold-dark" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif font-bold text-lg text-brand-dark truncate">Horarios</h3>
            <p className="text-xs text-gray-600 mt-1 truncate">Lun - Vie: 8:00 AM - 6:00 PM</p>
            <p className="text-xs text-gray-600 truncate">Sábados: 9:00 AM - 3:00 PM</p>
          </div>
        </div>

      </div>

      {/* Main Section: Contact Form + Atelier Location */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-rose/30">
          
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
              Envíanos un Mensaje
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Si tienes preguntas sobre nuestros servicios o quieres coordinar una visita, completa el siguiente formulario.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Gracias por contactar a Dolka Rodríguez Diseños. Responderemos a tu correo o teléfono en menos de 24 horas.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-brand-cream hover:bg-brand-cream-dark text-brand-dark font-semibold px-6 py-2.5 rounded-full text-xs transition border border-brand-rose/40 mt-4"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={contactData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Número de celular"
                    value={contactData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Ej. Consulta sobre Vestido de Novia"
                  value={contactData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Escribe aquí tus dudas o requerimientos..."
                  value={contactData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold py-3.5 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          )}

        </div>

        {/* Atelier Location & Image */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-gold/30 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-gold">Ubicación del taller</h3>
                <p className="text-xs text-gray-300">Turbaco, Bolívar Urbanización Santa Ana, Calle 13 # 25-34 Casa 34</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Atendemos en un espacio cómodo e íntimo equipado con vestier y espejos tridimensionales para que vivas la experiencia completa de tus pruebas de ajuste.
            </p>

            <div className="p-4 bg-brand-dark-light rounded-2xl border border-brand-gold/20 space-y-2 text-xs text-gray-300">
              <p className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-gold" />
                Dirección taller principal
              </p>
              <p className="text-gray-400">Turbaco, Bolívar Urbanización Santa Ana, Calle 13 # 25-34 Casa 34</p>
            </div>

            {/* Visual Studio Card / Mock map */}
            <div className="rounded-2xl overflow-hidden aspect-video border border-brand-gold/20 relative group">
              <img
                src="/images/logo2.jpg"
                alt="Taller Dolka Rodriguez"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex items-end p-4">
                <p className="text-xs font-semibold text-brand-gold">✨ Ambiente exclusivo con cita previa</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-brand-rose/30 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold-dark uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Resuelve tus dudas</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-dark">
            Preguntas frecuentes (FAQ)
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 pt-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-rose/30 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left bg-brand-cream/30 hover:bg-brand-cream flex items-center justify-between font-serif font-bold text-brand-dark text-base transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gold-dark transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="p-5 bg-white text-sm text-gray-700 border-t border-brand-rose/20 animate-fade-in leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}