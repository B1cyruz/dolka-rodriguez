import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
return (
    <nav className="bg-[#F5EFE6] p-5 shadow-md">
        <div className="container mx-auto flex justify-center space-x-8">
        <Link 
            to="/" 
            className="bg-[#E6B8B8] text-[#4A4A4A] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition duration-300 shadow-md"
        >
            Inicio
        </Link>

        <Link 
            to="/galeria" 
            className="bg-[#E6B8B8] text-[#4A4A4A] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition duration-300 shadow-md"
        >
            Galería
        </Link>

        <Link 
            to="/cotizacion" 
            className="bg-[#E6B8B8] text-[#4A4A4A] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition duration-300 shadow-md"
        >
            Cotización
        </Link>

        <Link 
            to="/contacto" 
            className="bg-[#E6B8B8] text-[#4A4A4A] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition duration-300 shadow-md"
        >
            Contacto
        </Link>
    </div>
    </nav>
    );
}

export default Navbar;