import { useEditor, EditorContent } from "@tiptap/react";
import defaultExtension from "./extensions";
import ActionMenu from "./components/menus/ActionMenu";
import Dropcursor from "@tiptap/extension-dropcursor";
import { IconGripVertical } from "@tabler/icons-react";
import { ContentMenu } from "./components/menus/ContentMenu";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [...defaultExtension, Dropcursor],
  });

  return (
    <div className="">
      {editor && (
        <>
          {/* <ContentMenu editor={editor} /> */}
          <ActionMenu editor={editor} />
          {/* <DragHandle editor={editor}>
            <IconGripVertical color="gray" size={20} />
          </DragHandle> */}
          <EditorContent editor={editor} />
        </>
      )}
    </div>
  );
};

export default Tiptap;
