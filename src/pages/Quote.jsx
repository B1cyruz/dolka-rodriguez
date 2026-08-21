import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, MessageCircle, Send, Upload, CheckCircle2, Scissors, Calendar, FileText } from "lucide-react";


export default function Quote() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    garmentType: "vestido_gala",
    customGarmentName: "",
    description: "",
    targetDate: "",
    budget: "medio",
    file: null,
    filePreview: null,
  });

  // Pre-fill garment if passed in URL params e.g. /cotizacion?prenda=Vestido%20Gala%20Real
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prendaParam = params.get("prenda");
    if (prendaParam) {
      setFormData((prev) => ({
        ...prev,
        garmentType: "otro",
        customGarmentName: prendaParam,
        description: `Deseo cotizar el modelo: ${prendaParam}.`,
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFormData((prev) => ({
        ...prev,
        file: selectedFile,
        filePreview: selectedFile.name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const prendaText = formData.garmentType === "otro" && formData.customGarmentName
      ? formData.customGarmentName
      : getGarmentLabel(formData.garmentType);

    const message = `✨ *NUEVA SOLICITUD DE COTIZACIÓN* ✨\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📞 *Teléfono:* ${formData.phone}\n` +
      `✉️ *Correo:* ${formData.email}\n` +
      `👗 *Tipo de Prenda:* ${prendaText}\n` +
      `📅 *Fecha Deseada:* ${formData.targetDate || "Por acordar"}\n` +
      `📝 *Detalles/Descripción:* ${formData.description}\n\n` +
      `Enviado desde el sitio web Dolka Rodríguez Diseños.`;

    return encodeURIComponent(message);
  };

  const getGarmentLabel = (val) => {
    switch (val) {
      case "vestido_gala": return "Vestido de Gala / Noche";
      case "vestido_novia": return "Vestido de Novia / Quinceañera";
      case "vestido_coctel": return "Vestido de Coctel / Casual";
      case "uniforme": return "Uniforme Escolar / Corporativo";
      case "arreglo": return "Arreglo / Modificación de Prenda";
      default: return "Diseño Personalizado";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Page Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-rose-light text-brand-dark font-medium text-xs border border-brand-rose/40">
          <Sparkles className="w-4 h-4 text-brand-gold-dark" />
          <span>Presupuesto sin compromiso</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
          Solicitar Cotización
        </h1>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Cuéntanos sobre la prenda que deseas confeccionar. Te enviaremos una estimación detallada y agendaremos tu prueba de medidas.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-rose/30 relative">
        
        {submitted ? (
          <div className="py-8 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold text-brand-dark">
                ¡Solicitud Registrada Con Éxito!
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto text-sm">
                Gracias, <strong className="text-brand-dark">{formData.name}</strong>. Hemos recibido tu información. Para acelerar tu atención, envía tu resumen directamente a nuestro WhatsApp:
              </p>
            </div>

            <div className="p-4 bg-brand-cream rounded-2xl border border-brand-gold/30 max-w-md mx-auto text-left text-xs space-y-2 text-gray-700">
              <p className="font-bold text-brand-dark">Resumen de tu Cotización:</p>
              <p>• <strong>Prenda:</strong> {formData.customGarmentName || getGarmentLabel(formData.garmentType)}</p>
              <p>• <strong>Contacto:</strong> {formData.phone} | {formData.email}</p>
              <p>• <strong>Fecha Solicitada:</strong> {formData.targetDate || "Sin definir"}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/573000000000?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition flex items-center justify-center gap-2 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar Ahora por WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    garmentType: "vestido_gala",
                    customGarmentName: "",
                    description: "",
                    targetDate: "",
                    budget: "medio",
                    file: null,
                    filePreview: null,
                  });
                }}
                className="bg-brand-cream hover:bg-brand-cream-dark text-brand-dark font-semibold px-6 py-3.5 rounded-full transition text-sm border border-brand-rose/40"
              >
                Hacer Otra Cotización
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Personal Info */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-rose/20 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark text-xs flex items-center justify-center font-bold">1</span>
                Información de Contacto
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej. María Fernanda Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ej. 300 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ej. maria@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Garment Details */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-rose/20 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark text-xs flex items-center justify-center font-bold">2</span>
                Detalles del Pedido
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Scissors className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Tipo de Prenda *
                  </label>
                  <select
                    name="garmentType"
                    value={formData.garmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  >
                    <option value="vestido_gala">Vestido de Gala / Noche</option>
                    <option value="vestido_novia">Vestido de Novia / Quinceañera</option>
                    <option value="vestido_coctel">Vestido de Coctel / Casual</option>
                    <option value="uniforme">Uniforme Escolar / Corporativo</option>
                    <option value="arreglo">Arreglo / Ajuste de Prenda Existente</option>
                    <option value="otro">Otro Diseño Personalizado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Fecha Aproximada de Entrega
                  </label>
                  <input
                    type="date"
                    name="targetDate"
                    value={formData.targetDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  />
                </div>

                {formData.garmentType === "otro" && (
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Nombre o Referencia de la Prenda
                    </label>
                    <input
                      type="text"
                      name="customGarmentName"
                      placeholder="Ej. Vestido Gala Real"
                      value={formData.customGarmentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Descripción del Pedido, Telas o Preferencias *
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    placeholder="Describe los colores, telas de preferencia, tipo de escote, largo, o cualquier detalle especial que desees incluir..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 3: File Attachment */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Upload className="w-3.5 h-3.5 text-brand-gold-dark" />
                Adjuntar Foto de Referencia o Diseño (Opcional)
              </label>

              <div className="border-2 border-dashed border-brand-rose/50 rounded-2xl p-6 text-center hover:border-brand-gold transition bg-brand-cream/40">
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-rose-light text-brand-dark flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-brand-dark">
                    {formData.filePreview ? (
                      <span className="text-emerald-600 font-bold">✓ Archivo: {formData.filePreview}</span>
                    ) : (
                      "Haz clic para subir una imagen de referencia"
                    )}
                  </p>
                  <p className="text-xs text-gray-500">Formatos permitidos: JPG, PNG, WEBP, PDF (Máx. 10MB)</p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition text-base flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud de Cotización</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}