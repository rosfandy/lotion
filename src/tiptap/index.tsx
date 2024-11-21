import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import defaultExtension from "./extensions";
import Dropcursor from "@tiptap/extension-dropcursor";
import { initialContent } from "./initContent"; // Assuming `initialContent` is imported here

interface Props {
  slug?: string;
}

export default function Tiptap({ slug }: Props) {
  const editor = useEditor({
    extensions: [...defaultExtension, Dropcursor],
    content: slug === "introduction" ? initialContent : "", // Conditional content assignment
  });

  return (
    <div>
      {editor && (
        <>
          <EditorContent editor={editor} />
        </>
      )}
    </div>
  );
}
