"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import ModeToggle from "./ui/modetoggle";

export default function SideNav() {
  return (
    <nav className="fixed left-0 top-0 h-full w-56 divide-y">
      {/* -translate-x-full overflow-hidden */}
      <Link href="/painel">
        <div className="flex flex-row justify-start align-items-center h-44 relative">
          <div className="h-44 w-44 relative">
            <Image src="/logo2.png" alt="logo" fill />
          </div>
          <div className="relative flex -ml-10 items-center">
            <span className="text-3xl mt-20">DC</span>
          </div>
        </div>
      </Link>
      <ul className="relative p-5">
        <li>
          <Link href="/painel">Painel</Link>
        </li>
        <li>
          <Link href="/painel/despesas">Despesas</Link>
        </li>
        <li>
          <Link href="/painel/rendimentos">Rendimentos</Link>
        </li>
      </ul>
      <div className="h-80"></div>
      <div className="flex flex-col items-center px-5">
        <div className="mt-5 mb-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DC</AvatarFallback>
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
