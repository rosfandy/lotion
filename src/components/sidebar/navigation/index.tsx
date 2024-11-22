import {
  IconChevronDown,
  IconFileText,
  IconHome,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import MenuItem from "../MenuItem";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  documents?: { id: string; title: string }[];
}

export default function Navigation({ documents }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div className="mt-8 flex flex-col gap-y-2 px-2 text-gray-500">
        <MenuItem uri="" text="Home" icon={<IconHome size={24} />} />
        <div>
          <div
            onClick={toggleDropdown}
            className="w-full text-left text-lg hover:text-blue-500 flex gap-x-2 items-center justify-between cursor-pointer"
          >
            <div className="flex gap-x-2 px-2 rounded-mds">
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
            <div className="pl-4 my-2 flex flex-col ">
              {documents && documents.length > 0 ? (
                documents.map(({ id, title }) => (
                  <MenuItem
                    key={id}
                    text={title}
                    uri={`/docs/${id}`}
                    icon={<IconFileText size={20} />}
                  />
                ))
              ) : (
                <div className="text-gray-500 text-sm">No documents exist</div>
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
    </div>
  );
}
