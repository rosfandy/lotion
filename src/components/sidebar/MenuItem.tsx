"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

interface MenuProps {
  uri: string;
  text: string;
  icon: ReactElement;
}

export default function MenuItem({ uri, text, icon }: MenuProps) {
  const baseUri = "/editor";
  const pathname = usePathname();

  const isActive = pathname === baseUri + uri;

  const iconWithColor = React.cloneElement(icon, {
    color: isActive ? "#3b82f6" : "#6b7280",
  });

  return (
    <Link
      href={baseUri + uri}
      className={`flex items-center gap-x-2 text-md p-2 rounded-md ${
        isActive
          ? "text-blue-500 font-bold bg-blue-100/50"
          : "text-[#6b7280] hover:text-blue-500"
      }`}
    >
      {iconWithColor}
      {text}
    </Link>
  );
}
