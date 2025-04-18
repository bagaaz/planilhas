import React from 'react';
import Link from 'next/link';
import { FileSpreadsheet, Calculator, CheckCircle } from 'lucide-react';

export default function FeaturedSpreadsheets() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nossas Planilhas em Destaque
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soluções específicas para diferentes áreas profissionais
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div
            className="flex flex-col items-center text-center rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Controle de Custo de Construção</h3>
              <p className="text-gray-500">
                Gerencie todos os custos da sua obra com precisão e evite surpresas no orçamento
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 py-6">
              <div className="rounded-full bg-blue-100 p-6">
                <FileSpreadsheet className="h-12 w-12 text-blue-600" />
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Controle de materiais e mão de obra</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Cronograma financeiro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Comparativo orçado vs. realizado</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 w-full">
              <Link
                href="/construcao"
                className="inline-flex w-full h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col items-center text-center rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Cálculo para Dentistas</h3>
              <p className="text-gray-500">Calcule o custo real de cada procedimento e defina preços mais precisos</p>
            </div>
            <div className="flex flex-col items-center space-y-4 py-6">
              <div className="rounded-full bg-blue-100 p-6">
                <Calculator className="h-12 w-12 text-blue-600" />
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Cálculo de custos por procedimento</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Análise de rentabilidade</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Simulação de cenários de preços</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 w-full">
              <Link
                href="/dentistas"
                className="inline-flex w-full h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}