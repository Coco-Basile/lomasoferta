import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Branding */}
      <h1 className="text-5xl font-extrabold mb-6 text-green-600 drop-shadow-lg">
        LomasOfertas
      </h1>
      <p className="mb-6 text-xl text-gray-700 italic">
        Tu plataforma de oportunidades locales
      </p>

      {/* Botones de roles */}
      <div className="flex gap-6">
        <Link href="/login?rol=comprador">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded shadow font-semibold">
            Soy comprador
          </button>
        </Link>

        <Link href="/login?rol=vendedor">
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded shadow font-semibold">
            Soy vendedor
          </button>
        </Link>
      </div>
    </main>
  );
}