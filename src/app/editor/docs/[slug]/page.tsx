"use client";
import { useState, useEffect } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import EditorNav from "@/components/navbar/EditorNav";
import Tiptap from "@/tiptap";
import { useParams } from "next/navigation";
import { JSONContent } from "@tiptap/core";

export default function Editor() {
  const { slug } = useParams();
  const initialContent: JSONContent = {
    type: "doc",
    content: [
      {
        type: "title",
        content: [
          {
            type: "text",
            text: "Introduction",
          },
        ],
      },
      {
        type: "heading",
        attrs: {
          level: 3,
        },
        content: [
          {
            type: "text",
            text: "Feature",
          },
        ],
      },
      {
        type: "orderedList",
        attrs: {
          start: 1,
        },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Order List",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Code Block",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Youtube",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "youtube",
        attrs: {
          src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          start: 0,
          width: 640,
          height: 320,
        },
      },
    ],
  };

  const [content, setContent] = useState<JSONContent>(initialContent);

  useEffect(() => {
    if (slug === "introduction") {
      console.log(slug);
      setContent(initialContent);
    }
  }, [slug]);

  return (
    <div className="min-h-screen bg-red-50">
      <div className="flex">
        <div className="bg-white min-h-screen w-full shadow">
          <EditorNav documentId={slug as string} />
          <div className="lg:px-64 md:px-24 px-4 py-12">
            <AnimatedDiv transition={{ duration: 0.3, ease: "easeOut" }}>
              <Tiptap initialContent={content} />
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
