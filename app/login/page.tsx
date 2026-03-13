"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rolParam = searchParams.get("rol"); // viene de la URL
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [rol, setRol] = useState<"comprador" | "vendedor" | null>(null);

  useEffect(() => {
    if (rolParam === "comprador" || rolParam === "vendedor") {
      setRol(rolParam);
    }
  }, [rolParam]);

  const ingresar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario || !clave || !rol) return;

    if (rol === "comprador") {
      router.push("/comprador");
    } else {
      router.push("/vendedor");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-600">
          Login {rol && `(${rol})`}
        </h2>

        <form onSubmit={ingresar}>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Contraseña</label>
            <input
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            className={`w-full px-6 py-2 rounded text-white ${
              rol === "comprador"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}