"use client";
import AnimatedDiv from "@/components/AnimatedDiv";
import EditorNav from "@/components/navbar/EditorNav";
import Tiptap from "@/tiptap";
import { useParams } from "next/navigation";

export default function Editor() {
  const { slug } = useParams();
  return (
    <div className="min-h-screen bg-red-50">
      <div className="flex">
        <div className="bg-white min-h-screen w-full shadow">
          <EditorNav documentId={slug as string} />
          <div className="lg:px-64 md:px-24 px-4 py-12">
            <AnimatedDiv transition={{ duration: 0.3, ease: "easeOut" }}>
              <Tiptap />
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
