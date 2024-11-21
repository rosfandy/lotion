import { JSONContent } from "@tiptap/core";

export const initialContent: JSONContent = {
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
