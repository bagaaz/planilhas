import { Check } from "lucide-react";

export default function Price() {
  return (
    <section id="preco" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Investimento que se paga rapidamente
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Um pequeno investimento para transformar a gestão financeira do seu consultório.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-sm space-y-4 rounded-lg border p-6 shadow-lg mt-12">
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Planilha Completa</h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">R$ 39,90</span>
              <span className="text-sm text-gray-500 line-through">R$ 89,90</span>
            </div>
            <p className="text-xs text-red-500 font-semibold">Promoção por tempo limitado!</p>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm">Acesso imediato após a compra</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm">Compatível com Excel e Google Sheets</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm">Suporte por 30 dias</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm">Atualizações gratuitas</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm">Garantia de 7 dias</span>
            </li>
          </ul>
          <button
            id="comprar"
            className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-medium shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          >
            Comprar Agora
          </button>
          <div className="text-center text-xs text-gray-500">
            Pagamento seguro via PIX, cartão de crédito ou boleto
          </div>
        </div>
      </div>
    </section>
  );
}