import Link from "next/link";

export default function Comprador() {
  // Array de productos (solo editás acá)
  const productos = [
    { nombre: "Yerba Mate", precio: 2500, imagen: "/yerba marolio.jpg" },
    { nombre: "Aceite Girasol", precio: 1800, imagen: "/aceite.jpg" },
    { nombre: "Arroz 1kg", precio: 950, imagen: "/arroz.jpg" },
    { nombre: "Fideos", precio: 700, imagen: "/fideos.jpg" },
    { nombre: "Azúcar", precio: 1200, imagen: "/azucar.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Catálogo de Ofertas</h2>
      <p className="mb-6">Aquí vas a encontrar las mejores oportunidades de LomasOfertas.</p>

      {/* Render automático de productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((p, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img
              src={p.imagen}
              alt={p.nombre}
              className="w-full h-60 object-contain rounded mb-2"
            />
            <h3 className="font-semibold text-lg">{p.nombre}</h3>
            <p className="text-gray-700">Precio: ${p.precio}</p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
              Ver más
            </button>
          </div>
        ))}
      </div>

      <Link href="/">
        <button className="mt-8 px-6 py-2 bg-gray-600 text-white rounded">
          ⬅ Volver al inicio
        </button>
      </Link>
    </main>
  );
}