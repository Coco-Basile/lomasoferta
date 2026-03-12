import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        LomasOfertas
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Buscando el precio justo
      </p>
      <div className="flex gap-6">
        <Link href="/comprador">
          <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-600">
            🛒 Soy comprador
          </button>
        </Link>
        <Link href="/vendedor">
          <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-orange-600">
            🏬 Soy vendedor
          </button>
        </Link>
      </div>
    </div>
  )
}