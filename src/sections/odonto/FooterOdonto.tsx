import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterOdonto() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-bold text-xl text-teal-600">PlanilhasFacil</div>
            <p className="text-sm text-gray-500">Soluções em planilhas para profissionais da saúde.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#recursos" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#preco" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Preço
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                  Reembolso
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Redes Sociais</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PlanilhasFacil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
