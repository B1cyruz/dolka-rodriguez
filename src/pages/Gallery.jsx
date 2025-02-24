import React from "react";

const Gallery = () => {
const dresses = [
    { id: 1, name: "Vestido Elegante", image: "/images/vestido1.jpg" },
    { id: 2, name: "Vestido de Gala", image: "/images/vestido2.jpg" },
    { id: 3, name: "Vestido Clásico", image: "/images/vestido3.jpg" },
    { id: 4, name: "Vestido noche", image: "/images/vestido4.jpg" },
];

return (
    <div className="bg-gray-100 min-h-screen p-8">
    <h2 className="text-4xl font-luxury text-center text-gray-800 mb-8">
        Catálogo de Vestidos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dresses.map((dress) => (
        <div key={dress.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
            src={dress.image}
            alt={dress.name}
            className="w-full h-[500px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center mt-2">{dress.name}</h3>
        </div>
        ))}
    </div>
    </div>
);
};

export default Gallery;
