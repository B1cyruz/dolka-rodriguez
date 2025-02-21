import React from "react";

function Home() {
return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
        Bienvenidos a Dolka Rodriguez Diseños
    </h1>
    
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Nuestra Misión</h2>
        <p className="text-lg mb-6">
        En <span className="font-semibold">Dolka Rodriguez diseños</span>, innovamos en el arte de la confección, 
        ofreciendo prendas de alta calidad, personalizadas y con diseños únicos. 
        Nuestro compromiso es realzar la belleza y comodidad de nuestros clientes.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-purple-600">Nuestra Visión</h2>
        <p className="text-lg">
        Ser la <span className="font-semibold">modistería número uno</span> del mercado, reconocida por 
        nuestra creatividad, excelencia en confección y servicio al cliente. 
        Queremos marcar tendencia con innovación y calidad.
        </p>
    </div>
    </div>
);
}

export default Home;