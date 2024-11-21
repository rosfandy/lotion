import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import defaultExtension from "./extensions";
import Dropcursor from "@tiptap/extension-dropcursor";
import { initialContent } from "./initContent"; // Assuming `initialContent` is imported here
import ActionMenu from "./components/menus/ActionMenu";

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
          <ActionMenu editor={editor} />
          <EditorContent editor={editor} />
        </>
      )}
    </div>
  );
}
