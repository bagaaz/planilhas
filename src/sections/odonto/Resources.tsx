import { Check } from "lucide-react";

export default function Resources() {
  return (
    <section id="recursos" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recursos Completos para sua Gestão Financeira
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Nossa planilha foi desenvolvida especificamente para consultórios odontológicos, com todos os recursos
              que você precisa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-4 py-12 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Check className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Controle de Custos</h3>
            <p className="text-center text-gray-500">
              Gerencie todos os custos fixos e variáveis do seu consultório com facilidade.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Check className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Precificação Justa</h3>
            <p className="text-center text-gray-500">
              Calcule o valor ideal para cada procedimento com base nos custos reais.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Check className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Gestão de Materiais</h3>
            <p className="text-center text-gray-500">
              Controle o custo de cada material utilizado nos procedimentos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Check className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Relatórios Detalhados</h3>
            <p className="text-center text-gray-500">
              Visualize relatórios completos sobre custos e lucratividade de cada procedimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}