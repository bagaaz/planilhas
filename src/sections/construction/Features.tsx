import { BarChart3, Calculator, ClipboardCheck, DollarSign } from "lucide-react";

export default function Features() {
  return (
    <section id="recursos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              Recursos Exclusivos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa planilha foi desenvolvida por especialistas em construção civil para garantir o controle total
              da sua obra.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-orange-100 p-3">
              <Calculator className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Comparativo de Orçamentos</h3>
            <p className="text-center text-sm text-gray-500">
              Compare orçamentos de diferentes fornecedores e escolha a melhor opção para cada etapa da sua obra.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-orange-100 p-3">
              <BarChart3 className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Análise de Custo-Benefício</h3>
            <p className="text-center text-sm text-gray-500">
              Compare materiais diferentes (ex: lajota vs tijolo estrutural) considerando o custo final por m² com
              acabamento.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-orange-100 p-3">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Controle de Custos</h3>
            <p className="text-center text-sm text-gray-500">
              Acompanhe em tempo real todos os gastos da sua obra, evitando surpresas e mantendo o orçamento sob
              controle.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-orange-100 p-3">
              <ClipboardCheck className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-center">Gestão de Encargos</h3>
            <p className="text-center text-sm text-gray-500">
              Calcule automaticamente os encargos trabalhistas para pedreiros e outros profissionais da sua obra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}