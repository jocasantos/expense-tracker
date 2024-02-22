import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-950 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#181717_1px,transparent_1px),linear-gradient(to_bottom,#181717_1px,transparent_1px)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#00ace6,transparent)]"></div>
      </div>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="h-32 w-40 relative ">
            <Image src="/logo3.png" alt="logo" fill sizes="100vh" />
          </div>
          <h1 className="z-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
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
        {/* <div className="flex justify-center">
          <Image
            src="/mock-expense-tracker.png"
            alt="App image example"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto", maxWidth: "768px" }}
          />
        </div> */}
      </MaxWidthWrapper>
      {/* Images of the app large and small screen (2) */}
    </>
  );
}
