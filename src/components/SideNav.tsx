"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, HandCoins, LayoutDashboard, LogOut } from "lucide-react";
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
    <nav className="fixed left-0 top-0 h-full w-56">
      {/* -translate-x-full overflow-hidden */}
      <Link href="/painel">
        <div className="flex flex-row justify-start align-items-center h-44 relative ">
          <div className="h-44 w-44 relative">
            <Image src="/logo2.png" alt="logo" fill />
          </div>
          <div className="relative flex -ml-10 items-center">
            <span className="text-3xl mt-20">DC</span>
          </div>
        </div>
      </Link>
      <div className="border-b-2"></div>

      <div className="flex flex-col space-y-6 pt-8 ">
        <Link
          className={buttonVariants({
            className: "text-xl rounded-none",
            variant: getButtonVariant("/painel"),
            size: "lg",
          })}
          href="/painel"
        >
          <LayoutDashboard className="mr-2 h-6 w-6" />
          Painel
        </Link>
        <Link
          className={buttonVariants({
            className: "text-xl rounded-none",
            variant: getButtonVariant("/painel/despesas"),
            size: "lg",
          })}
          href="/painel/despesas"
        >
          <CreditCard className="mr-2 h-6 w-6" />
          Despesas
        </Link>
        <Link
          className={buttonVariants({
            className: "text-xl rounded-none",
            variant: getButtonVariant("/painel/rendimentos"),
            size: "lg",
          })}
          href="/painel/rendimentos"
        >
          <HandCoins className="mr-2 h-6 w-6" />
          Rendimentos
        </Link>
      </div>

      <div className="h-60 border-b-2"></div>
      <div className="flex flex-col items-center px-5">
        <div className="mt-5 mb-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <p>Mock Name</p>
        <div className="flex space-x-2 py-5">
          <LogOut />
          <p>Log Out</p>
        </div>
        <div className="my-5">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
