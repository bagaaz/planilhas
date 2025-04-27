import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Price() {
  return (
    <section id="preco" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Investimento que se paga em economia</h2>
          <p className="text-gray-500 md:text-xl">
            Um pequeno investimento para economizar milhares de reais na sua obra.
          </p>
        </div>
        <div className="mx-auto max-w-md mt-12">
          <div className="rounded-lg border bg-white p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 bg-orange-600 text-white text-sm font-bold py-2 px-12 rotate-45">
              OFERTA
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <h3 className="text-2xl font-bold">Planilha Completa</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">R$ 39,90</span>
                <span className="ml-2 text-lg text-gray-500 line-through">R$ 89,90</span>
              </div>
              <p className="text-sm text-orange-600 font-medium">Economize R$ 50,00 (55% de desconto)</p>
              <ul className="space-y-2 mt-4 text-left">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Acesso imediato após a compra</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Compatível com Excel e Google Sheets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Atualizações gratuitas por 1 ano</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Suporte por email por 30 dias</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                id="comprar"
                href="#"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-orange-500 focus:ring-offset-2"
              >
                Comprar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Pagamento único. Sem assinaturas ou cobranças recorrentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}