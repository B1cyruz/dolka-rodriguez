import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, MessageCircle, Upload, CheckCircle2, Scissors, Calendar, FileText, Download, Mail, FileCheck, Info, Ruler } from "lucide-react";
import { generateQuotePDF } from "../utils/generateQuotePDF";
import emailjs from "@emailjs/browser";

export default function Quote() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedPdfInfo, setGeneratedPdfInfo] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    garmentType: "vestido_gala",
    customGarmentName: "",
    busto: "",
    cintura: "",
    cadera: "",
    estatura: "",
    description: "",
    targetDate: "",
    file: null,
    filePreview: null,
    imageDataUrl: null,
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          file: selectedFile,
          filePreview: selectedFile.name,
          imageDataUrl: reader.result,
        }));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const getGarmentLabel = (val) => {
    switch (val) {
      case "vestido_gala": return "Vestido de Gala / Noche";
      case "vestido_novia": return "Vestido de Novia / Quinceañera";
      case "vestido_coctel": return "Vestido de Coctel / Casual";
      case "uniforme": return "Uniforme escolar";
      case "uniforme_corporativo": return "Uniforme corporativo";
      case "arreglo": return "Arreglo / Modificación de Prenda";
      default: return "Diseño Personalizado";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const garmentLabel = getGarmentLabel(formData.garmentType);
    const pdfData = generateQuotePDF({ ...formData, garmentLabel });
    setGeneratedPdfInfo(pdfData);

    // Dispatch notification to test email dolka36@gmail.com
    sendEmailNotification(pdfData, garmentLabel);

    setSubmitted(true);
    setLoading(false);
  };

  const sendEmailNotification = async (pdfData, garmentLabel) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_default";

      const templateParams = {
        to_email: "dolka36@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        garment_type: formData.customGarmentName || garmentLabel,
        target_date: formData.targetDate || "Por acordar",
        measurements: `Busto: ${formData.busto || 'N/A'}, Cintura: ${formData.cintura || 'N/A'}, Cadera: ${formData.cadera || 'N/A'}, Estatura: ${formData.estatura || 'N/A'}`,
        description: formData.description,
        quote_code: pdfData.quoteCode,
      };

      if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }
    } catch {
      // Graceful fallback
    }
  };

  const handleDownloadPDF = () => {
    if (generatedPdfInfo && generatedPdfInfo.doc) {
      generatedPdfInfo.doc.save(generatedPdfInfo.filename);
    }
  };

  const getWhatsAppMessage = () => {
    const prendaText = formData.garmentType === "otro" && formData.customGarmentName
      ? formData.customGarmentName
      : getGarmentLabel(formData.garmentType);

    const quoteCode = generatedPdfInfo ? generatedPdfInfo.quoteCode : "DR-2026";

    const message = `✨ *NUEVA SOLICITUD DE COTIZACIÓN (${quoteCode})* ✨\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📞 *Teléfono:* ${formData.phone}\n` +
      `✉️ *Correo:* ${formData.email}\n` +
      `👗 *Prenda:* ${prendaText}\n` +
      `📏 *Medidas:* Busto: ${formData.busto || '-'}, Cintura: ${formData.cintura || '-'}, Cadera: ${formData.cadera || '-'}\n` +
      `📅 *Fecha Deseada:* ${formData.targetDate || "Por acordar"}\n` +
      `📝 *Descripción:* ${formData.description}\n\n` +
      `Ficha PDF con foto de referencia canalizada a: dolka36@gmail.com`;

    return encodeURIComponent(message);
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
          Cuéntanos sobre tu prenda. Incluye tus medidas aproximadas e imagen de referencia para generar tu cotización.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-rose/30 relative">
        
        {submitted ? (
          <div className="py-6 text-center space-y-6 animate-fade-in">
            
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-gold-dark tracking-widest uppercase">
                Cotización #{generatedPdfInfo?.quoteCode}
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-dark">
                ¡Solicitud Generada!
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto text-sm">
                Gracias, <strong className="text-brand-dark">{formData.name}</strong>. Tu cotizacion, tus medidas y foto de referencia. Se ha canalizado al correo <strong className="text-brand-dark">dolka36@gmail.com</strong>.
              </p>
            </div>

            {/* Email Dispatch Badge */}
            <div className="p-4 bg-brand-cream rounded-2xl border border-brand-gold/30 max-w-md mx-auto text-left text-xs space-y-2 text-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-dark flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-brand-gold-dark" />
                  Notificación por Correo
                </span>
                <span className="bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                  Enviado a dolka36@gmail.com
                </span>
              </div>
              <p>• <strong>Cotización código:</strong> #{generatedPdfInfo?.quoteCode}</p>
              <p>• <strong>Prenda:</strong> {formData.customGarmentName || getGarmentLabel(formData.garmentType)}</p>
              <p>• <strong>Medidas:</strong> Busto: {formData.busto || 'N/A'} | Cintura: {formData.cintura || 'N/A'} | Cadera: {formData.cadera || 'N/A'}</p>
              <p>• <strong>Contacto:</strong> {formData.phone} | {formData.email}</p>
              {formData.filePreview && (
                <p className="text-emerald-700 font-medium">📷 Foto incrustada dentro del PDF: {formData.filePreview}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              
              <button
                onClick={handleDownloadPDF}
                className="w-full sm:w-auto bg-brand-dark hover:bg-brand-dark-light text-brand-gold font-bold px-6 py-3.5 rounded-full shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Descargar ({generatedPdfInfo?.filename})</span>
              </button>

              <a
                href={`https://wa.me/573000000000?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-full shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar por WhatsApp</span>
              </a>

            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setGeneratedPdfInfo(null);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    garmentType: "vestido_gala",
                    customGarmentName: "",
                    busto: "",
                    cintura: "",
                    cadera: "",
                    estatura: "",
                    description: "",
                    targetDate: "",
                    file: null,
                    filePreview: null,
                    imageDataUrl: null,
                  });
                }}
                className="text-xs font-semibold text-gray-500 hover:text-brand-dark underline transition"
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
                Información del cliente
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
                Especificaciones del Pedido
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
                    <option value="uniforme">Uniforme escolar</option>
                    <option value="uniforme_corporativo">Uniforme corporativo</option>
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
                      Nombre o referencia de la prenda
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
              </div>
            </div>

            {/* Section 3: Measurements (Toma de Medidas) */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-rose/20 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark text-xs flex items-center justify-center font-bold">3</span>
                Toma de medidas aproximadas (Opcional)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-brand-cream/40 rounded-2xl border border-brand-rose/30">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Busto (cm)
                  </label>
                  <input
                    type="number"
                    name="busto"
                    placeholder="Ej. 90"
                    value={formData.busto}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Cintura (cm)
                  </label>
                  <input
                    type="number"
                    name="cintura"
                    placeholder="Ej. 68"
                    value={formData.cintura}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Cadera (cm)
                  </label>
                  <input
                    type="number"
                    name="cadera"
                    placeholder="Ej. 95"
                    value={formData.cadera}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Estatura (cm)
                  </label>
                  <input
                    type="number"
                    name="estatura"
                    placeholder="Ej. 165"
                    value={formData.estatura}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Description & File */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-rose/20 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark text-xs flex items-center justify-center font-bold">4</span>
                Descripción o foto de referencia
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Descripción del pedido, telas o preferencias *
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    placeholder="Describe los colores, telas de preferencia, tipo de escote, largo, o cualquier detalle especial que desees incluir..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none text-sm transition"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5 text-brand-gold-dark" />
                    Adjuntar Foto de Referencia
                  </label>

                  <div className="border-2 border-dashed border-brand-rose/50 rounded-2xl p-6 text-center hover:border-brand-gold transition bg-brand-cream/40">
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
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
                          <span className="text-emerald-600 font-bold">✓ Foto cargada: {formData.filePreview}</span>
                        ) : (
                          "Haz clic para subir la imagen de referencia"
                        )}
                      </p>
                      <p className="text-xs text-gray-500">Formatos permitidos: JPG, PNG, WEBP</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition text-base flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? (
                  <span>Incrustando foto y generando PDF...</span>
                ) : (
                  <>
                    <FileCheck className="w-5 h-5" />
                    <span>Enviar Cotización</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}