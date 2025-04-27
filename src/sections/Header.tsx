import React from 'react';
import Link from 'next/link';
import { BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BarChart3 className="h-6 w-6" />
          <span>Planilhas Facil</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/construction" className="text-sm font-medium hover:underline underline-offset-4">
            Controle de Custo de Construção
          </Link>
          <Link href="/odonto" className="text-sm font-medium hover:underline underline-offset-4">
            Cálculo para Dentistas
          </Link>
          <Link href="/todos-produtos" className="text-sm font-medium hover:underline underline-offset-4">
            Todos os Produtos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Entrar
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}