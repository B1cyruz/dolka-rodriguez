import React from "react";

function Home() {
return (
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center text-white p-10">
    <header className="mb-9 text-center">

    <h1 className="text-6xl font-serif mb-4">
            Bienvenidos a Dolka Rodriguez Diseños
    </h1>

    <div className="image-container">
        <img src="images/logo.jpg" alt="Logo1" className="mx-auto mb-2" />
    </div>
    </header>
    
    <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600">Nuestra Misión</h2>
        <p className="text-xl">
        En <span className="font-serif">Dolka Rodriguez diseños</span>, innovamos en el arte de la confección, 
        ofreciendo prendas de alta calidad, personalizadas y con diseños únicos. 
        Nuestro compromiso es realzar la belleza y comodidad de nuestros clientes.
        </p>

        <h2 className="text-4xl font-bold mb-4 text-purple-600">Nuestra Visión</h2>
        <p className="text-xl">
        Ser la <span className="font-serif">modistería número uno</span> del mercado, reconocida por 
        nuestra creatividad, excelencia en confección y servicio al cliente. 
        Queremos marcar tendencia con innovación y calidad.
        </p>    
    </div>
    </div>
);
}

export default Home;