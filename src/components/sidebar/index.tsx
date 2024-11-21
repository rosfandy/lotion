"use client";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IconChevronDown,
  IconFileText,
  IconHome,
  IconLogout,
  IconMenu2,
  IconSettings,
  IconX,
} from "@tabler/icons-react";
import AnimatedDiv from "../AnimatedDiv";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const name = "Anonymous";
  const [documents, setDocuments] = useState<
    { id: string; title: string }[] | null
  >(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedDocuments = localStorage.getItem("documents");
    if (storedDocuments) {
      setDocuments(JSON.parse(storedDocuments));
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed lg:w-[15%] shadow z-[100] ${
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
          <div className="flex flex-col gap-4 p-4 bg-slate-50 min-h-screen">
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
            <div className="mt-8 flex flex-col gap-y-4 px-2 text-gray-500">
              <MenuItem uri="" text="Home" icon={<IconHome size={24} />} />
              <div>
                <div
                  onClick={toggleDropdown}
                  className="w-full text-left text-lg hover:text-blue-500 flex gap-x-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-x-2">
                    <IconFileText size={24} color="#6b7280" />
                    <div className="text-gray-500 text-[16px]">Documents</div>
                  </div>
                  <IconChevronDown size={20} color="#6b7280" />
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isDropdownOpen ? 1 : 0,
                    height: isDropdownOpen ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 my-2 flex flex-col gap-y-2">
                    {documents && documents.length > 0 ? (
                      documents.map((doc) => (
                        <MenuItem
                          key={doc.id}
                          text={doc.id}
                          uri={`/docs/${doc.id}`}
                          icon={<IconFileText size={20} />}
                        />
                      ))
                    ) : (
                      <div className="text-gray-500 text-sm">
                        No documents exist
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              <MenuItem
                uri="/setting"
                text="Setting"
                icon={<IconSettings size={24} className="" />}
              />
            </div>
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
