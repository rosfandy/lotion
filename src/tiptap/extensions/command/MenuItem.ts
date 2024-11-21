import type { Extensions } from "@tiptap/core";

import type { Group } from "./types";
import { localeActions } from "@/tiptap/locales";
import type { HeadingOptions } from "@tiptap/extension-heading";
export function renderGroups(extensions: Extensions) {
  const groups: Group[] = [
    {
      name: "format",
      title: localeActions.t("editor.slash.format"),
      commands: [],
    },
    {
      name: "insert",
      title: localeActions.t("editor.slash.insert"),
      commands: [],
    },
  ];

  const heading: Record<number, { icon: string; desc: string }> = {
    1: {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-h-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
      desc: "Big section heading",
    },
    2: {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-h-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
      desc: "Medium section heading",
    },
    3: {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-h-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 -2 -2" /><path d="M17 16a2 2 0 1 0 2 -2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
      desc: "Small section heading",
    },
  };

  extensions.forEach((extension) => {
    console.log(extension.name.toLowerCase());
    if (extension.name.toLowerCase() === "heading") {
      extension.options.levels.forEach(
        (level: HeadingOptions["levels"][number]) => {
          if (level === 1 || level === 2 || level === 3) {
            groups[0].commands.push({
              name: `heading${level}`,
              label: localeActions.t(`editor.heading.h${level}.tooltip`),
              aliases: [`h${level}`, "bt", `bt${level}`],
              iconUrl: heading[level].icon,
              description: heading[level].desc,
              action: ({ editor, range }) => {
                editor
                  .chain()
                  .focus()
                  .deleteRange(range)
                  .setHeading({ level })
                  .run();
              },
            });
          }
        }
      );
    }

    if (extension.name.toLowerCase() === "paragraph") {
      groups[0].commands.push({
        name: "paragraph",
        label: localeActions.t("editor.paragraph.tooltip"),
        aliases: ["ul", "yxlb"],
        iconUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pilcrow"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 4v16" /><path d="M17 4v16" /><path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" /></svg>`,
        description: "Create a simple text",
        action: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setNode("paragraph").run();
        },
      });
    }

    if (extension.name.toLowerCase() === "codeblock") {
      groups[0].commands.push({
        name: "codeblock",
        label: localeActions.t("editor.codeblock.tooltip"),
        iconUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>`,
        description: "Capture a code snippet",
        action: ({ editor }) => {
          editor.commands.setCodeBlock();
        },
      });
    }

    if (extension.name.toLowerCase() === "orderedlist") {
      groups[0].commands.push({
        name: "orderedlist",
        label: localeActions.t("editor.orderedlist.tooltip"),
        aliases: ["ol", "yxlb"],
        iconUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-list-numbers"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
        description: "Create an ordered list",
        action: ({ editor, range }) => {
          editor.commands.toggleOrderedList();
        },
      });
    }

    if (extension.name.toLowerCase() === "youtube") {
      groups[1].commands.push({
        name: "youtube",
        label: "YouTube",
        aliases: ["ol", "yxlb"],
        iconUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>`,
        description: "Embeed a youtube video",
        action: ({ editor, range }) => {
          const url = prompt("Please enter the YouTube video URL:");
          if (url) {
            editor.commands.setYoutubeVideo({
              src: url,
            });
          } else {
            alert("No URL provided. Please enter a valid YouTube URL.");
          }
        },
      });
    }
  });

  return groups;
}
