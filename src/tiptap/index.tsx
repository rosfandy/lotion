import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import defaultExtension from "./extensions";
import Dropcursor from "@tiptap/extension-dropcursor";

interface TiptapProps {
  initialContent?: JSONContent;
}
export default function Tiptap({ initialContent }: TiptapProps) {
  const editor = useEditor({
    extensions: [...defaultExtension, Dropcursor],
    content: initialContent || "",
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
