import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preços acessíveis</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Invista em ferramentas que trarão retorno para seu negócio
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Planilha Individual</h3>
              <p className="text-gray-500">Para profissionais autônomos</p>
            </div>
            <div className="py-6 text-center">
              <span className="text-4xl font-bold">R$97</span>
              <span className="text-gray-500">/planilha</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Atualizações gratuitas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Suporte por 30 dias</span>
              </li>
            </ul>
            <Link
              href="/comprar/individual"
              className="inline-flex w-full h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Comprar Agora
            </Link>
          </div>
          <div className="rounded-lg border-2 border-blue-600 bg-white p-6 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
              Popular
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Pacote Profissional</h3>
              <p className="text-gray-500">Nossa opção mais popular</p>
            </div>
            <div className="py-6 text-center">
              <span className="text-4xl font-bold">R$247</span>
              <span className="text-gray-500">/3 planilhas</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Atualizações gratuitas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Suporte por 60 dias</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Consultoria de 30 minutos</span>
              </li>
            </ul>
            <Link
              href="/comprar/profissional"
              className="inline-flex w-full h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Comprar Agora
            </Link>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Pacote Empresarial</h3>
              <p className="text-gray-500">Para equipes e empresas</p>
            </div>
            <div className="py-6 text-center">
              <span className="text-4xl font-bold">R$497</span>
              <span className="text-gray-500">/todas as planilhas</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Atualizações gratuitas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Suporte por 90 dias</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                <span>Personalização básica</span>
              </li>
            </ul>
            <Link
              href="/comprar/empresarial"
              className="inline-flex w-full h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}