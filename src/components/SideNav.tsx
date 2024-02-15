"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronLeftCircle,
  CreditCard,
  HandCoins,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import ModeToggle from "./ui/modetoggle";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { get } from "http";

export default function SideNav() {
  const pathname = usePathname();

  function getButtonVariant(path: string) {
    return pathname === path ? "secondary" : "ghost";
  }

  return (
    <nav className="fixed place-content-between left-0 top-0  flex h-20 w-full lg:h-full lg:w-56 lg:flex-col">
      {/* -translate-x-full overflow-hidden */}
      {/* <div className="lg:block lg:absolute lg:-right-4 lg:top-40 hidden">
        <ChevronLeftCircle size={30} fill="#60a5fa" strokeWidth={2} />
      </div> */}
      <Link href="/painel">
        <div className="flex flex-row justify-start align-items-center lg:h-44 relative lg:pl-0 pl-1 ">
          <div className="lg:h-44 lg:w-44 w-20 h-20 relative">
            <Image src="/logo2.png" alt="logo" fill />
          </div>
          <div className="relative -ml-10 items-center lg:flex hidden">
            <span className="lg:text-3xl lg:mt-20">DC</span>
          </div>
        </div>
      </Link>
      <div className="lg:border-b-2 lg:block lg:-mt-8 hidden"></div>

      <div className="flex lg:flex-col lg:space-y-6 lg:pt-6 lg:items-stretch flex-row items-center space-x-2">
        <Link
          className={buttonVariants({
            className: "text-xl rounded-md lg:rounded-none",
            variant: getButtonVariant("/painel"),
            size: "lg",
          })}
          href="/painel"
        >
          <LayoutDashboard className="lg:mr-2 lg:h-6 lg:w-6 w-5 h-5 " />
          <p className="hidden lg:block">Painel</p>
        </Link>
        <Link
          className={buttonVariants({
            className: "text-xl rounded-md lg:rounded-none",
            variant: getButtonVariant("/painel/despesas"),
            size: "lg",
          })}
          href="/painel/despesas"
        >
          <CreditCard className="lg:mr-2 lg:h-6 lg:w-6 w-5 h-5 " />
          <p className="hidden lg:block">Despesas</p>
        </Link>
        <Link
          className={buttonVariants({
            className: "text-xl rounded-md lg:rounded-none",
            variant: getButtonVariant("/painel/rendimentos"),
            size: "lg",
          })}
          href="/painel/rendimentos"
        >
          <HandCoins className="lg:mr-2 lg:h-6 lg:w-6 w-5 h-5 " />
          <p className="hidden lg:block">Rendimentos</p>
        </Link>
      </div>

      <div className="lg:h-60 lg:border-b-2 lg:block hidden"></div>
      <div className="flex lg:flex-col items-center lg:space-x-0 lg:px-5 space-x-6 flex-row ml-5 lg:ml-0">
        <div className=" lg:mb-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <p className="hidden lg:block">Mock Name</p>
        {/* <div className="flex space-x-2 py-5">
          <LogOut />
          <p className="hidden text-gray-500 lg:block">Term. sessão</p>
        </div> */}
        <div className="lg:my-10 lg:pr-0 pr-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
