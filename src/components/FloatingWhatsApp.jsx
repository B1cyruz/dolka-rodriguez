import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "573002795084";
  const defaultMessage = encodeURIComponent("¡Hola! Me interesa información sobre la confección de una prenda sobre medida en Dolka Rodríguez Diseños.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-white/30"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-semibold">
        ¿Dudas o Citas? ¡Escríbenos!
      </span>
    </a>
  );
}
