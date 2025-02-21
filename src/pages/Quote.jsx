import { useState } from "react";

const Quote = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    garmentType: "vestido", // Valor por defecto
    description: "",
    file: null,
});

const handleChange = (e) => {
const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Cotización enviada con éxito!");
};

return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Solicitar Cotización</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
        />
        <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
        />
        <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
        />
        <select
            name="garmentType"
            value={formData.garmentType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
        >
            <option value="vestido">Vestido de gala</option>
            <option value="uniforme">Uniforme escolar</option>
            <option value="otro">Otro</option>
        </select>
        <textarea
            name="description"
            placeholder="Descripción del pedido"
            value={formData.description}
            onChange={handleChange}
            required
        className="w-full p-2 border rounded"
        ></textarea>
        <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Enviar Cotización
        </button>
        </form>
    </div>
);
};

export default Quote;