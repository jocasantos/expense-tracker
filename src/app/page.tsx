import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Controla as tuas <span className="text-blue-600">despesas</span> de
            maneira simples e rápida.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Registre-se agora e descubra como um controle eficiente pode ser o
            caminho para uma poupança sólida e uma vida financeira mais
            realizadora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/entrar" className={buttonVariants()}>
              Entrar
            </Link>
            <Link href="/registar">
              <Button variant="ghost">Regista-te &rarr;</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
