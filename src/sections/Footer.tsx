import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © { new Date().getFullYear() } Planilhas Facil. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/termos" className="text-sm text-gray-500 hover:underline underline-offset-4">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="text-sm text-gray-500 hover:underline underline-offset-4">
            Política de Privacidade
          </Link>
          <Link href="/contato" className="text-sm text-gray-500 hover:underline underline-offset-4">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
