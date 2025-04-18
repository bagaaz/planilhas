import React from 'react';
import { FileSpreadsheet, BarChart3, Calculator } from 'lucide-react';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Planilhas que simplificam sua vida profissional
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Economize tempo e tome decisões mais inteligentes com nossas planilhas profissionais prontas para uso.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/planilhas"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Ver Planilhas
              </Link>
              <Link
                href="/como-funciona"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Como Funciona
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-[500px] h-[400px] bg-gradient-to-br from-blue-100 to-gray-100 p-4 rounded-lg shadow-lg flex items-center justify-center">
              <FileSpreadsheet className="w-32 h-32 text-blue-500/80" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <BarChart3 className="w-12 h-12 text-blue-500" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <Calculator className="w-12 h-12 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}