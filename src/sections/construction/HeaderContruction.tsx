import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function HeaderContruction() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
          <BarChart3 className="h-6 w-6" />
          <span>Planilhas Facil</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#recursos" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Recursos
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Depoimentos
          </Link>
          <Link href="#preco" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Preço
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Contato
          </Link>
        </nav>
        <Link
          href="#comprar"
          className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-orange-500 focus:ring-offset-2"
        >
          Comprar Agora
        </Link>
      </div>
    </header>
  );
}