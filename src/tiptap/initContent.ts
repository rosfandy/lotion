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
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Welcome to lotion editor apps 🖐️. Lotion Editor is a application designed for creating and editing content with ease. This project is a learning experience focused on building an intuitive and feature-rich editor similar to Notion.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Enjoy my works 😁.",
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
                  text: "Heading",
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
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Slash Menu",
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
                  text: "Drag Handle",
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
                  text: "Collaboration (coming soon)",
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
