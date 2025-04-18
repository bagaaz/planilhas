import React from 'react';
import { Clock, BarChart3, Shield } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Por que escolher nossas planilhas?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desenvolvidas por especialistas para facilitar seu dia a dia
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Economize Tempo</h3>
            <p className="text-gray-500">
              Planilhas prontas para uso, sem necessidade de criar fórmulas complexas do zero.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-blue-100 p-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Decisões Baseadas em Dados</h3>
            <p className="text-gray-500">
              Visualize informações importantes de forma clara para tomar melhores decisões.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Confiabilidade</h3>
            <p className="text-gray-500">Planilhas testadas e aprovadas por profissionais da área.</p>
          </div>
        </div>
      </div>
    </section>
  );
}