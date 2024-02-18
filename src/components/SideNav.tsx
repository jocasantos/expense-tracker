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
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SideNav() {
  const pathname = usePathname();

  function getButtonVariant(path: string) {
    return pathname === path ? "default" : "ghost";
  }

  return (
    <nav className=" place-content-between   flex w-full lg:flex-col  rounded-lg backdrop-filter backdrop-blur-md bg-opacity-10 border-4  border-blue-200">
      {/* -translate-x-full overflow-hidden */}
      {/* <div className="lg:block lg:absolute lg:-right-4 lg:top-40 hidden">
        <ChevronLeftCircle size={30} fill="#60a5fa" strokeWidth={2} />
      </div> */}
      <Link href="/painel">
        <div className="flex justify-center align-items-center lg:h-44 relative lg:pl-0 pl-1 lg:pt-4">
          <div className="lg:h-14 lg:w-48 w-20 h-20 relative">
            <Image src="/logo5.png" alt="logo" fill />
          </div>
          {/* <div className="relative -ml-10 items-center lg:flex hidden">
            <span className="lg:text-3xl lg:mt-20">DC</span>
          </div> */}
        </div>
      </Link>
      <div className=" lg:block lg:-mt-8 hidden"></div>

      <div className="flex lg:flex-col lg:space-y-6 lg:pt-6 lg:px-4 lg:items-stretch flex-row items-center space-x-2 lg:space-x-0">
        <Link
          className={buttonVariants({
            className: "text-lg rounded-md ",
            variant: getButtonVariant("/painel"),
          })}
          href="/painel"
        >
          <LayoutDashboard className="lg:mr-2 lg:h-5 lg:w-5 w-5 h-5 " />
          <p className="hidden lg:block">Painel</p>
        </Link>
        <Link
          className={buttonVariants({
            className: "text-lg rounded-md ",
            variant: getButtonVariant("/painel/despesas"),
          })}
          href="/painel/despesas"
        >
          <CreditCard className="lg:mr-2 lg:h-5 lg:w-5 w-5 h-5 " />
          <p className="hidden lg:block">Despesas</p>
        </Link>
        <Link
          className={buttonVariants({
            className: "text-lg rounded-md ",
            variant: getButtonVariant("/painel/rendimentos"),
          })}
          href="/painel/rendimentos"
        >
          <HandCoins className="lg:mr-2 lg:h-5 lg:w-5 w-5 h-5 " />
          <p className="hidden lg:block">Rendimentos</p>
        </Link>
      </div>

      <div className="lg:h-60  lg:block hidden"></div>
      <div className="flex lg:flex-col items-center lg:space-x-0 lg:px-5 space-x-6 flex-row ml-5 lg:ml-0">
        {/* <div className=" lg:mb-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <p className="hidden lg:block">Mock Name</p> */}
        {/* <div className="flex space-x-2 py-5">
          <LogOut />
          <p className="hidden text-gray-500 lg:block">Term. sessão</p>
        </div> */}
        <UserButton afterSignOutUrl="/" />

        <div className="lg:my-10 lg:pr-0 pr-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
