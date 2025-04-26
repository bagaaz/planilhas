import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-xl text-teal-600">
          <span>PlanilhasFacil</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#recursos" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Recursos
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Depoimentos
          </Link>
          <Link href="#preco" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Preço
          </Link>
        </nav>
        <Link
          href="#comprar"
          className="inline-flex h-9 items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          Comprar Agora
        </Link>
      </div>
    </header>
  );
}