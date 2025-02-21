import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-around">
        <a href="/" className="text-xl font-semibold hover:text-gray-300">Inicio</a>
        <a href="/galeria" className="text-xl font-semibold hover:text-gray-300">Galería</a>
        <a href="/cotizacion" className="text-xl font-semibold hover:text-gray-300">Cotización</a>
        <a href="/contacto" className="text-xl font-semibold hover:text-gray-300">Contacto</a>
        </div>
    </nav>
    );
}
export default Navbar;