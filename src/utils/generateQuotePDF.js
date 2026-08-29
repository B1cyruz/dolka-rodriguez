import { jsPDF } from "jspdf";

/**
 * Genera un PDF profesional con membrete institucional de Dolka Rodríguez Diseños.
 * @param {Object} data - Datos del formulario de cotización.
 * @returns {Object} { doc, pdfBlob, quoteCode, filename }
 */
export function generateQuotePDF(data) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const quoteCode = `DR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Top Banner Accent
  doc.setFillColor(42, 36, 33); // brand-dark
  doc.rect(0, 0, 210, 28, "F");

  doc.setFillColor(212, 175, 55); // brand-gold
  doc.rect(0, 28, 210, 3, "F");

  // Header Title
  doc.setTextColor(212, 175, 55);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("DOLKA RODRÍGUEZ", 15, 14);

  doc.setTextColor(240, 240, 240);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Alta costura y modistería sobre medida", 15, 21);

  // Quote Code & Date (Right Header)
  doc.setTextColor(212, 175, 55);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(`COTIZACIÓN #${quoteCode}`, 195, 14, { align: "right" });

  doc.setTextColor(220, 220, 220);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(`Fecha: ${dateStr}`, 195, 21, { align: "right" });

  let y = 38;

  // Section 1: Customer Information
  doc.setFillColor(250, 248, 245);
  doc.roundedRect(15, y, 180, 32, 3, 3, "F");
  doc.setDrawColor(230, 184, 184);
  doc.roundedRect(15, y, 180, 32, 3, 3, "D");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(42, 36, 33);
  doc.text("1. DATOS DEL CLIENTE", 20, y + 7);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);

  doc.text(`Nombre Completo:`, 20, y + 15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(`${data.name || "N/A"}`, 55, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Teléfono / WhatsApp:`, 20, y + 21);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(`${data.phone || "N/A"}`, 58, y + 21);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Correo Electrónico:`, 20, y + 27);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(`${data.email || "N/A"}`, 55, y + 27);

  y += 38;

  // Section 2: Garment & Order Details
  doc.setFillColor(250, 248, 245);
  doc.roundedRect(15, y, 180, 28, 3, 3, "F");
  doc.setDrawColor(230, 184, 184);
  doc.roundedRect(15, y, 180, 28, 3, 3, "D");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(42, 36, 33);
  doc.text("2. ESPECIFICACIONES DEL PEDIDO", 20, y + 7);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);

  const prendaText = data.customGarmentName || data.garmentLabel || "Diseño Personalizado";
  doc.text(`Tipo de Prenda:`, 20, y + 15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(168, 131, 25);
  doc.text(`${prendaText}`, 50, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Fecha Deseada de Entrega:`, 20, y + 22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(`${data.targetDate || "Por acordar con el taller"}`, 68, y + 22);

  y += 34;

  // Section 3: Measurements (Toma de Medidas)
  doc.setFillColor(250, 248, 245);
  doc.roundedRect(15, y, 180, 28, 3, 3, "F");
  doc.setDrawColor(212, 175, 55);
  doc.roundedRect(15, y, 180, 28, 3, 3, "D");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(42, 36, 33);
  doc.text("3. TOMA DE MEDIDAS (APROXIMADAS)", 20, y + 7);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);

  const bustoText = data.busto ? `${data.busto} cm` : "No especificado";
  const cinturaText = data.cintura ? `${data.cintura} cm` : "No especificado";
  const caderaText = data.cadera ? `${data.cadera} cm` : "No especificado";
  const estaturaText = data.estatura ? `${data.estatura} cm` : "No especificado";

  doc.text(`Contorno Busto:`, 20, y + 15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(bustoText, 50, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Contorno Cintura:`, 110, y + 15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(cinturaText, 142, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Contorno Cadera:`, 20, y + 22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(caderaText, 50, y + 22);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  doc.text(`Largo / Estatura:`, 110, y + 22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(42, 36, 33);
  doc.text(estaturaText, 142, y + 22);

  y += 34;

  // Section 4: Description & Notes
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(15, y, 180, 42, 3, 3, "F");
  doc.setDrawColor(212, 175, 55);
  doc.roundedRect(15, y, 180, 42, 3, 3, "D");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(42, 36, 33);
  doc.text("4. DESCRIPCIÓN - OBSERVACIONES DE CONFECCIÓN", 20, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(60, 60, 60);

  const splitDescription = doc.splitTextToSize(data.description || "Sin descripción adicional.", 170);
  doc.text(splitDescription, 20, y + 15);

  y += 48;

  // Section 5: Attached Image if present
  if (data.imageDataUrl) {
    doc.setFillColor(250, 248, 245);
    doc.roundedRect(15, y, 180, 70, 3, 3, "F");
    doc.setDrawColor(212, 175, 55);
    doc.roundedRect(15, y, 180, 70, 3, 3, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(42, 36, 33);
    doc.text("5. FOTO / DISEÑO DE REFERENCIA", 20, y + 7);

    try {
      doc.addImage(data.imageDataUrl, "JPEG", 75, y + 10, 60, 55);
    } catch {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text("Imagen adjunta en formato no compatible para previsualización directa.", 20, y + 20);
    }
    y += 75;
  }

  // Footer
  doc.setDrawColor(200, 200, 200);
  doc.line(15, 275, 195, 275);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(42, 36, 33);
  doc.text("Dolka Rodríguez Diseños", 15, 281);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Taller de modistería y alta costura • Documento oficial de cotización sobre medida", 15, 285);
  doc.text("Página 1 de 1", 195, 285, { align: "right" });

  const filename = `Cotizacion_${quoteCode}.pdf`;
  const pdfBlob = doc.output("blob");

  return {
    doc,
    pdfBlob,
    quoteCode,
    filename,
  };
}
