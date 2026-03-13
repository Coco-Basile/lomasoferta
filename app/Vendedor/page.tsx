"use client";
import { useState } from "react";
import Link from "next/link";

export default function Vendedor() {
  // Estado para productos cargados
  const [productos, setProductos] = useState<
    { nombre: string; precio: number; imagen: string }[]
  >([]);

  // Estado para el formulario
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  // Función para agregar producto
  const agregarProducto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !precio || !imagen) return;

    const nuevoProducto = {
      nombre,
      precio: parseFloat(precio),
      imagen,
    };

    setProductos([...productos, nuevoProducto]);

    // Limpiar formulario
    setNombre("");
    setPrecio("");
    setImagen("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Panel del Vendedor</h2>
      <p className="mb-6">Cargá tus productos de manera simple y automática.</p>

      {/* Formulario */}
      <form onSubmit={agregarProducto} className="bg-white p-4 rounded shadow mb-8">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Nombre del producto</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Ej: Yerba Mate"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Ej: 2500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Imagen (ruta en public)</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="/yerba.jpg"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Agregar producto
        </button>
      </form>

      {/* Lista de productos cargados */}
      <h3 className="text-2xl font-bold mb-4">Productos cargados</h3>
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