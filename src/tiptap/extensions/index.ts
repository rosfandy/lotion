/* eslint-disable */
import StarterKit from "@tiptap/starter-kit";
import OrderedList from "@tiptap/extension-ordered-list";
import Text from "@tiptap/extension-text";

import { DocumentWithTitle, Title } from "./title";
import Placeholder from "./placeholder";
import { SlashCommand } from "./command/SlashCommand";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Youtube from "./youtube";
import History from "@tiptap/extension-history";

const defaultExtension = [
  CodeBlock,
  DocumentWithTitle,
  Heading.configure({
    levels: [1, 2, 3],
  }),
  History,
  ListItem,
  OrderedList.configure({
    HTMLAttributes: {
      class: "orderedList",
    },
  }),
  Title,
  Paragraph,
  Placeholder.configure({
    placeholder: ({ node }: any) => {
      let text = "Write something … or type '/' to choose block";
      switch (node.type.name) {
        case "title":
          text = "Untitled";
          break;
        case "heading":
          text = "Heading";
          break;
        case "codeBlock":
          text = "write code ...";
          break;
        default:
          break;
      }
      return text;
    },
    showOnlyCurrent: false,
    includeChildren: true,
  }),
  SlashCommand,
  Text,
  Youtube.configure({
    controls: true,
    nocookie: true,
    enableIFrameApi: true,
    allowFullscreen: true,
    width: 640,
    height: 320,
  }),
];

export default defaultExtension;
