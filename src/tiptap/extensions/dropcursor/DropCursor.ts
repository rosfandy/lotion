import { Extension } from "@tiptap/core";
import { dropCursor as customDropCursor } from "./pm-dropcursor";

export const DropCursorExtension = Extension.create({
  name: "dropcursor",

  addProseMirrorPlugins() {
    return [
      customDropCursor({
        color: "black",
        width: 2,
        class: "custom-drop-cursor",
      }),
    ];
  },
});
