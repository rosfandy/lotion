"use client";
import Avatar from "../Avatar";
import { useEffect, useState } from "react";
import { IconLogout, IconMenu2, IconX } from "@tabler/icons-react";
import AnimatedDiv from "../AnimatedDiv";
import Navigation from "./navigation";
import Link from "next/link";

export default function Sidebar() {
  const [documents, setDocuments] = useState<
    { id: string; title: string }[] | null
  >(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name, setName] = useState<string>("Anonymous");

  useEffect(() => {
    const storedDocuments = localStorage.getItem("documents");
    const storedName = localStorage.getItem("name");
    storedDocuments ? setDocuments(JSON.parse(storedDocuments)) : null;
    storedName ? setName(storedName) : null;
  }, []);

  return (
    <div
      className={`fixed lg:w-[15%] shadow z-[90] border ${
        isSidebarOpen ? "" : "ml-[0em]"
      } transition-all duration-300`}
    >
      <AnimatedDiv>
        <div
          className={`fixed p-2 z-[100] lg:hidden  ${
            isSidebarOpen ? "ml-[12em]" : "ml-[0em]"
          } transition-all duration-300`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <IconX size={24} color="#6b7280" />
          ) : (
            <IconMenu2 size={24} color="#6b7280" />
          )}
        </div>
        <div
          className={`fixed md:w-[100%] lg:ml-0 md:static z-[99] transition-all ease-in-out duration-300 ${
            isSidebarOpen ? "ml-0" : "-ml-[15em]"
          }`}
        >
          <div className="flex flex-col gap-4 px-4 py-12 bg-slate-50 min-h-screen">
            {/* Profile Section */}
            <div className="flex items-center gap-x-4">
              <div className="bg-slate-300 p-1 rounded-[40%]">
                <Avatar name={name} transparent={true} />
              </div>
              <div className="">
                <div className="font-semibold text-md">{name}</div>
                <div className="font-light text-black/50 text-sm">
                  Your name
                </div>
              </div>
            </div>
            {/* Menu Section with Navigation Links */}
            <Navigation documents={documents || []} />
            <Link href="/" className="flex items-center gap-x-2 mt-auto">
              <div className="text-[#6b7280]">Logout</div>
              <IconLogout size={24} color="#6b7280" />
            </Link>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
