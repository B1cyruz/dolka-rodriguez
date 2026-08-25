import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Eye, X, ArrowRight, CheckCircle2, Scissors, Clock } from "lucide-react";

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [activeModalDress, setActiveModalDress] = useState(null);

  const categories = [
    { id: "todos", label: "Todos los Diseños" },
    { id: "gala", label: "Gala & Noche" },
    { id: "novias", label: "Novias & Quinceañeras" },
    { id: "coctel", label: "Coctel & Casual" },
    { id: "uniformes", label: "Uniformes escolares" },
    { id: "corporativo", label: "Uniformes corporativos" }
  ];

  const dresses = [
    {
      id: 1,
      name: "Vestido gala real",
      category: "gala",
      categoryName: "Gala & Noche",
      image: "/images/vestido1.jpg",
      description: "Diseño sofisticado con corte sirena, escote favorecedor y drapeado artesanal confeccionado en satén de seda.",
      fabric: "Satén de Seda & Organza",
      timeframe: "10 - 15 días de confección",
      details: ["Forro interior de suave tacto", "Cierre invisible trasero", "Falda estructurada con vuelo"],
    },
    {
      id: 2,
      name: "Vestido noche esmeralda",
      category: "gala",
      categoryName: "Gala & Noche",
      image: "/images/vestido2.jpg",
      description: "Espectacular vestido de noche con detalles sutiles de pedrería fina y silueta estilizada para recepciones inolvidables.",
      fabric: "Crepe Premium & Aplicaciones",
      timeframe: "12 - 18 días de confección",
      details: ["Bordados a mano", "Corte imperio refinado", "Incluye prueba de ajuste"],
    },
    {
      id: 3,
      name: "Vestido coctel clásico",
      category: "coctel",
      categoryName: "Coctel & Casual",
      image: "/images/vestido3.jpg",
      description: "Vestido versátil de talle medio con falda fluida, ideal para cenas formales, bautizos y graduaciones.",
      fabric: "Chiffon & Encaje Francés",
      timeframe: "7 - 10 días de confección",
      details: ["Corte supercómodo", "Borde de encaje fino", "Excelente caída natural"],
    },
    {
      id: 4,
      name: "Vestido noche estelar",
      category: "gala",
      categoryName: "Gala & Noche",
      image: "/images/vestido4.jpg",
      description: "Diseño audaz y glamuroso para eventos nocturnos de alta etiqueta. Confección a medida con ajuste milimétrico.",
      fabric: "Velvet Silk & Lentejuelas",
      timeframe: "10 - 14 días de confección",
      details: ["Acabado de alta costura", "Copas moldeadoras integradas", "Ajuste personalizado"],
    },
    {
      id: 5,
      name: "Vestido novia ensueño",
      category: "novias",
      categoryName: "Novias & Quinceañeras",
      image: "/images/vestido1.jpg",
      description: "Vestido de novia sobre medida con cola catedral, encaje de encanto nupcial y detalles delicados en tul cristal.",
      fabric: "Encaje Nupcial & Tul Cristal",
      timeframe: "20 - 30 días (Incluye 3 pruebas)",
      details: ["Diseño 100% sobre medida", "Cola desmontable opcional", "Velo coordinado disponible"],
    },
    {
      id: 6,
      name: "Uniforme escolares premium",
      category: "uniformes",
      categoryName: "Uniformes escolares",
      image: "/images/uniforme.jpg",
      description: "Uniforme institucional de alta durabilidad, confeccionado con costuras reforzadas para empresas e instituciones.",
      fabric: "Poliéster Algodón Antiarrugas",
      timeframe: "Según volumen de producción",
      details: ["Telas de uso rudo y fácil lavado", "Bordado de logotipo corporativo", "Tallaje exacto por empleado"],
    },

    {
      id: 7,
      name: "Uniformes corporativo y ejecutivo",
      category: "corporativo",
      categoryName: "Uniformes corporativos",
      image: "/images/corporativo.jpg",
      description: "Uniformes empresariales de alta calidad, confeccionados con materiales resistentes para uso diario en entornos profesionales.",
      fabric: "Poliéster Algodón Antiarrugas",
      timeframe: "Según volumen de producción",
      details: ["Telas de uso rudo y fácil lavado", "Bordado de logotipo corporativo", "Tallaje exacto por empleado"],
    },
  ];

  const filteredDresses = selectedCategory === "todos"
    ? dresses
    : dresses.filter((d) => d.category === selectedCategory);

  const handleQuoteThisDress = (dressName) => {
    setActiveModalDress(null);
    navigate(`/cotizacion?prenda=${encodeURIComponent(dressName)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-rose-light text-brand-dark font-medium text-xs border border-brand-rose/40">
          <Sparkles className="w-4 h-4 text-brand-gold-dark" />
          <span>Colección de alta costura y modistería</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
          Catálogo & Galería de Diseños
        </h1>
        <p className="text-gray-600 text-base">
          Explora nuestra muestra de confecciones realizadas sobre medida. Cada modelo puede personalizarse en color, tipo de tela, escote y largo según tu preferencia.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat.id
                ? "bg-brand-dark text-brand-gold shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-brand-cream-dark border border-brand-rose/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dress Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredDresses.map((dress) => (
          <div
            key={dress.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-rose/30 flex flex-col group"
          >
            {/* Image Thumbnail Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
              <img
                src={dress.image}
                alt={dress.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-sm text-brand-gold text-xs px-3 py-1 rounded-full font-medium">
                {dress.categoryName}
              </div>

              {/* Hover Quick View Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => setActiveModalDress(dress)}
                  className="bg-white text-brand-dark p-3 rounded-full shadow-lg hover:scale-110 transition duration-200"
                  aria-label="Ver detalles"
                  title="Ver detalles"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-gold-dark transition duration-200">
                  {dress.name}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                  {dress.description}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalDress(dress)}
                  className="text-xs font-semibold text-brand-dark hover:text-brand-gold-dark flex items-center gap-1"
                >
                  <span>Detalles</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleQuoteThisDress(dress.name)}
                  className="bg-brand-rose/40 hover:bg-brand-gold hover:text-brand-dark text-brand-dark font-bold text-xs px-3.5 py-1.5 rounded-full transition"
                >
                  Cotizar
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox / Preview Modal */}
      {activeModalDress && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-brand-gold/40 relative max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalDress(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 text-brand-dark hover:bg-brand-gold p-2 rounded-full shadow-md transition"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Image */}
            <div className="md:w-1/2 bg-brand-cream relative aspect-[3/4] md:aspect-auto">
              <img
                src={activeModalDress.image}
                alt={activeModalDress.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-md text-brand-gold text-xs px-3 py-1 rounded-full font-medium">
                {activeModalDress.categoryName}
              </span>
            </div>

            {/* Right Info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-brand-gold-dark uppercase tracking-wider">Dolka Rodríguez taller</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">
                    {activeModalDress.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeModalDress.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-200 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-brand-gold-dark flex-shrink-0" />
                    <span><strong className="text-brand-dark">Telas Recomendadas:</strong> {activeModalDress.fabric}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold-dark flex-shrink-0" />
                    <span><strong className="text-brand-dark">Tiempo Estimado:</strong> {activeModalDress.timeframe}</span>
                  </div>
                </div>

                {activeModalDress.details && (
                  <div className="space-y-1.5 pt-2">
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">Características de confección:</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {activeModalDress.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleQuoteThisDress(activeModalDress.name)}
                  className="flex-1 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold py-3 px-4 rounded-full text-center text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>Cotizar esta prenda</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="bg-brand-rose-light/50 p-8 rounded-3xl border border-brand-rose/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-serif text-2xl font-bold text-brand-dark">¿Tienes una idea o foto de referencia?</h3>
          <p className="text-sm text-gray-600 mt-1">Confeccionamos cualquier diseño que tengas en mente. Envíanos tu foto para darte un presupuesto exacto.</p>
        </div>
        <Link
          to="/cotizacion"
          className="bg-brand-dark hover:bg-brand-dark-light text-brand-gold font-bold px-6 py-3 rounded-full text-sm shadow-md transition whitespace-nowrap"
        >
          Enviar mi diseño
        </Link>
      </div>

    </div>
  );
}
