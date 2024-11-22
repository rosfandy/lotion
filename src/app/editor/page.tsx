"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/breadcrumb";
import DocumentForm from "@/components/form";
import { AnimatePresence } from "framer-motion";
import { IconFileFilled } from "@tabler/icons-react";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";

interface Document {
  id: string;
  title: string;
}

export default function Editor() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  useEffect(() => {
    const storedDocuments = localStorage.getItem("documents");

    if (storedDocuments && storedDocuments !== "[]") {
      setDocuments(JSON.parse(storedDocuments));
    } else {
      const defaultDocument: Document = {
        id: "introduction",
        title: "Introduction",
      };
      const initialDocuments = [defaultDocument];
      localStorage.setItem("documents", JSON.stringify(initialDocuments));
      setDocuments(initialDocuments);
    }
  }, []);

  const handleCreateDocument = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (id: string, title: string) => {
    const newDocument: Document = { id, title };
    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
    setIsFormVisible(false);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="bg-white min-h-screen w-full py-6 px-12">
          <Breadcrumb />
          <div className="mt-16">
            <AnimatedDiv>
              <div className="flex justify-end w-full mt-8">
                <button
                  onClick={handleCreateDocument}
                  className="bg-black text-white py-2 px-4 rounded-md"
                >
                  Create
                </button>
              </div>

              {documents.length > 0 ? (
                <div className="flex flex-wrap gap-4 py-4">
                  {documents.map((doc) => (
                    <Link
                      href={`/editor/docs/${doc.id}`}
                      className="border p-4 lg:w-[20%] md:w-[40%] w-full gap-y-2 flex flex-col cursor-pointer hover:shadow transition-all duration-300 ease-in-out"
                      key={doc.id}
                    >
                      <IconFileFilled color="#3b82f6" size={32} />
                      <div className="">
                        <div className="font-bold">{doc.id}</div>
                        <div className="">{doc.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div>No documents available</div>
              )}
            </AnimatedDiv>

            <AnimatePresence>
              {isFormVisible && (
                <DocumentForm
                  onClose={handleCloseForm}
                  onSubmit={handleSubmit}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
