import { Link } from "react-router-dom";
import { Sparkles, Scissors, ShieldCheck, HeartHandshake, ArrowRight, Star, MessageCircle, Ruler, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-rose-light via-brand-cream to-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-rose/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-dark font-medium text-xs sm:text-sm border border-brand-gold/30">
              <Sparkles className="w-4 h-4 text-brand-gold-dark" />
              <span>Taller de alta costura y confección sobre medida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
              Elegancia única y diseños exclusivos para cada ocasión
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              En <strong className="font-serif text-brand-dark">Dolka Rodríguez Diseños</strong>, transformamos tus ideas en prendas de vestir espectaculares. Cada pieza es confeccionada a mano con atención meticulosa a cada detalle, resaltando tu estilo y figura.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/cotizacion"
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-base"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/galeria"
                className="bg-white hover:bg-brand-cream text-brand-dark border-2 border-brand-gold/40 font-semibold px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-base"
              >
                <span>Ver catálogo</span>
              </Link>
            </div>

            {/* Micro badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-gold/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-xl text-brand-dark">100%</p>
                <p className="text-xs text-gray-600">Personalizado</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-xl text-brand-dark">Alta</p>
                <p className="text-xs text-gray-600">Calidad en telas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-xl text-brand-dark">Ajuste</p>
                <p className="text-xs text-gray-600">Perfecto garantizado</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold via-brand-rose to-brand-gold rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              
              {/* Main Card */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-brand-gold/30">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
                  <img
                    src="/images/logo.jpg"
                    alt="Dolka Rodriguez Confecciones"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent flex flex-col justify-end p-6 pb-12 text-white">
                    <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">Dolka Rodríguez</span>
                    <h3 className="font-serif text-2xl font-bold">Creaciones de ensueño</h3>
                    <p className="text-xs text-gray-200 mt-1 leading-relaxed">Confección artesanal de vestidos de gala y vestuario sobre medida.</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-brand-gold/30 flex items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-rose-light flex items-center justify-center text-brand-gold-dark flex-shrink-0">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Modistería experta</p>
                    <p className="text-sm font-bold text-brand-dark font-serif">Confección a medida</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-3">
            ¿Por qué elegir Dolka Rodríguez diseños?
          </h2>
          <p className="text-gray-600">
            Nos dedicamos a hacer sentir especial a cada persona ofreciendo una experiencia integral de modistería y diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 hover:shadow-xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-gold-dark flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Diseño exclusivo</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Creamos bocetos y prendas personalizadas según tus preferencias de estilo, silueta y color.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 hover:shadow-xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-gold-dark flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Telas premium</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seleccionamos únicamente textiles de alta calidad para garantizar suavidad, durabilidad y caída impecable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 hover:shadow-xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-gold-dark flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Pruebas de ajuste</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sesiones de prueba minuciosas en nuestro taller para que tu vestido moldee tu figura de manera óptima.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 hover:shadow-xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-gold-dark flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Entrega puntual</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Respetamos los tiempos acordados para que tengas tu prenda lista con total tranquilidad antes de tu evento.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Showcase */}
      <section className="bg-brand-cream-dark/50 py-16 border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-gold-dark tracking-widest uppercase">Nuestras especialidades</span>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mt-1">
              Catálogo de confección y servicios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-rose/30 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/vestido2.jpg" alt="Vestidos de Gala" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-brand-gold text-xs px-3 py-1 rounded-full font-medium">Gala & noche</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Vestidos de gala</h3>
                  <p className="text-xs text-gray-600">Diseños impactantes para grados, cenas, eventos formales y alfombra roja.</p>
                </div>
                <Link to="/galeria" className="mt-4 text-xs font-bold text-brand-gold-dark hover:text-brand-dark flex items-center gap-1">
                  Ver ejemplos <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-rose/30 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/vestido1.jpg" alt="Vestidos Elegantes" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-brand-gold text-xs px-3 py-1 rounded-full font-medium">Novias</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Novias & quinceañeras</h3>
                  <p className="text-xs text-gray-600">Creaciones de gran formato con pedrería, encajes delicados y velos a juego.</p>
                </div>
                <Link to="/galeria" className="mt-4 text-xs font-bold text-brand-gold-dark hover:text-brand-dark flex items-center gap-1">
                  Ver ejemplos <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-rose/30 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/vestido3.jpg" alt="Vestidos Clásicos" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-brand-gold text-xs px-3 py-1 rounded-full font-medium">Coctel</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Vestidos de coctel</h3>
                  <p className="text-xs text-gray-600">Cortes modernos y versátiles ideales para eventos semiformales y celebraciones.</p>
                </div>
                <Link to="/galeria" className="mt-4 text-xs font-bold text-brand-gold-dark hover:text-brand-dark flex items-center gap-1">
                  Ver ejemplos <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-rose/30 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/uniforme.jpg" alt="Uniformes y Trajes" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-brand-gold text-xs px-3 py-1 rounded-full font-medium">Uniformes</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Uniformes escolares</h3>
                  <p className="text-xs text-gray-600">Confección masiva de alta durabilidad para colegios, e instituciones educativas, tambien ajustes generales.</p>
                </div>
                <Link to="/cotizacion" className="mt-4 text-xs font-bold text-brand-gold-dark hover:text-brand-dark flex items-center gap-1">
                  Cotizar uniforme <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-white to-brand-rose-light/40 p-8 rounded-3xl shadow-lg border border-brand-rose/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-brand-rose/20">
              <HeartHandshake className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-rose text-brand-dark flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-dark">Nuestra Misión</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                En <strong className="font-serif text-brand-dark">Dolka Rodríguez Diseños</strong>, innovamos en el arte de la confección, ofreciendo prendas de alta calidad, personalizadas y con diseños únicos. Nuestro compromiso fundamental es realzar la belleza, elegancia y comodidad de cada uno de nuestros clientes mediante un trato cálido y profesional.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-brand-dark to-brand-dark-light p-8 rounded-3xl shadow-lg border border-brand-gold/30 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-brand-gold/10">
              <Award className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center font-bold">
                <Star className="w-6 h-6 fill-brand-dark" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-gold">Nuestra Visión</h2>
              <p className="text-gray-200 leading-relaxed text-base">
                Ser la <strong className="font-serif text-white">modistería número uno del mercado</strong>, reconocida a nivel regional por nuestra creatividad sin límites, excelencia indiscutible en confección y un servicio al cliente excepcional. Queremos marcar tendencia permanente con innovación, vanguardia y estándares superiores de calidad.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-brand-gold-dark tracking-widest uppercase">Opiniones reales</span>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-1">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 italic">
              &quot;El vestido de mi grado quedó tal como lo soñaba. La atención al detalle de la sra. Dolka y el ajuste perfecto me hicieron sentir muy segura en mi gran noche.&quot;
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="font-serif font-bold text-brand-dark text-sm">Carolina Mendoza</p>
              <p className="text-xs text-gray-500">Vestido de Gala</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 italic">
              &quot;Mandé a hacer el uniforme de mis hijas y la confección es excelente. Resistente, costuras firmes y entregado exactamente en la fecha prometida.&quot;
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="font-serif font-bold text-brand-dark text-sm">Patricia Gómez</p>
              <p className="text-xs text-gray-500">Uniformes escolares</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-rose/20 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 italic">
              &quot;La mejor modistería de la ciudad. Hizo los arreglos de mi vestido de novia y quedó impecable. Muy recomendada por su paciencia y profesionalismo.&quot;
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="font-serif font-bold text-brand-dark text-sm">Mariana Ríos</p>
              <p className="text-xs text-gray-500">Alta costura novias</p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-dark via-brand-dark-light to-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-brand-gold/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-gold">
              ¿Lista para diseñar tu vestido ideal?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Cotiza sin compromiso o agenda tu cita presencial en nuestro taller. Te asesoramos en la elección de telas, cortes y acabados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/cotizacion"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-center text-sm"
            >
              Pedir cotización ahora
            </Link>
            <a
              href="https://wa.me/573002795084"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-center text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat de WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}