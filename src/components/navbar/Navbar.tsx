"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center z-[9999]">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 mx-auto z-50 transition-all duration-500",
        isScrolled
          ? "md:w-[40%] mt-[10px] border shadow backdrop-blur-lg rounded-full "
          : "md:w-[80%] mt-[-10px]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center text-sm gap-x-2 justify-between w-full">
          <div className="text-sm flex items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={0}
              height={0}
              unoptimized={true}
              className="w-[30px] h-[30px]"
            ></Image>
            <div className="font-bold text-lg">Lotion</div>
          </div>
          <Link href="/editor">
            <button className="text-sm white font-bold bg-white px-4 py-2 rounded-full shadow">
              Get started
            </button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
