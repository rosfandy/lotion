import { useEffect, useRef, useState } from "react";
import type { Editor } from "@tiptap/core";
import type { NodeSelection } from "@tiptap/pm/state";
import {
  DragHandlePlugin,
  dragHandlePluginDefaultKey,
} from "echo-drag-handle-plugin";

import type { Node } from "@tiptap/pm/model";
import { IconGripVertical } from "@tabler/icons-react";

export interface ContentMenuProps {
  editor: Editor;
  disabled?: boolean;
  className?: string;
  pluginKey?: string;
}

function ContentMenu(props: ContentMenuProps) {
  const { pluginKey = dragHandlePluginDefaultKey } = props;
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [currentNodePos, setCurrentNodePos] = useState(-1);
  const dragElement = useRef(null);
  const pluginRef = useRef<any | null>(null);

  useEffect(() => {
    if (dragElement.current && !props.editor.isDestroyed) {
      pluginRef.current = DragHandlePlugin({
        editor: props.editor,
        element: dragElement.current,
        pluginKey: "ContentItemMenu",
        tippyOptions: {
          interactive: true,
          offset: [-2, 16],
          zIndex: 99,
          moveTransition: "transform 0.15s ease-out",
        },
        onNodeChange: handleNodeChange,
      });

      props.editor.registerPlugin(pluginRef.current);
    }
  }, [props.editor, dragElement]);

  function handleNodeChange(e: any) {
    if (e.node) {
      console.log(e.node);
      setCurrentNode(e.node);
    }
    setCurrentNodePos(e.pos);
  }

  useEffect(() => {
    return () => {
      if (pluginRef.current) {
        props.editor.unregisterPlugin(pluginKey);
        pluginRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (props.editor?.isDestroyed && pluginRef.current) {
      props.editor.unregisterPlugin(pluginKey);
      pluginRef.current = null;
    }
  }, [props.editor?.isDestroyed]);

  return (
    <div
      className={`drag-handle `}
      style={{
        opacity: props?.disabled ? 0 : 1,
      }}
      ref={dragElement}
    >
      <div className="">
        <IconGripVertical color="gray" size={20} />
      </div>
    </div>
  );
}

export { ContentMenu };
