import { useState, useEffect } from "react";
import { FloatingMenu } from "@tiptap/react";
import { IconGripVertical, IconPlus } from "@tabler/icons-react";
import { Editor } from "@tiptap/core";
import {
  DragNode,
  GetTopLevelBlockCoords,
  GetTopLevelNode,
} from "@/tiptap/utils/pm-utils";

export interface ActionMenuProps {
  editor: Editor;
  disabled?: boolean;
  className?: string;
  pluginKey?: string;
  draggedNodePosition?: any;
}

export default function ActionMenu(props: ActionMenuProps) {
  const [topLevelNodeType, setTopLevelNodeType] = useState<string | null>(null);
  const [currentPos, setCurrentPos] = useState<Number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [draggedNodePosition, setDraggedNodePosition] = useState<number | null>(
    null
  );

  const getCurrentNodeType = () => {
    const currentNode = GetTopLevelNode(props.editor.view);
    return currentNode ? currentNode.type.name : null;
  };

  useEffect(() => {
    const nodeType = getCurrentNodeType();
    setTopLevelNodeType(nodeType);
  }, [props.editor.view.state.selection]);

  const getMenuCoords = () => {
    const coord = GetTopLevelBlockCoords(props.editor.view);
    const val = coord.left - 12;
    const updatedCoord = new DOMRect(val, coord.top, coord.width, coord.height);
    return updatedCoord;
  };

  const startDragging = (e: React.MouseEvent) => {
    const coords = { left: e.clientX + 48, top: e.clientY };
    const pos = props.editor.view.posAtCoords(coords);

    if (pos) {
      setDraggedNodePosition(pos.pos);
      setDragging(true);
    } else {
      console.warn("Invalid position on drag start");
    }
  };

  const handleDragEnd = (event: DragEvent) => {
    const targetNodeFromCoords = props.editor.view.posAtCoords({
      left: event.clientX + 20,
      top: event.clientY,
    });

    if (targetNodeFromCoords) {
      if (
        draggedNodePosition !== null &&
        targetNodeFromCoords.pos !== undefined
      ) {
        DragNode({
          view: props.editor.view,
          state: props.editor.state,
          draggedNodePosition: draggedNodePosition,
          targetNodePosition: targetNodeFromCoords.pos,
        });
      }
    }
    setDragging(false);
  };

  return (
    <div>
      <FloatingMenu
        editor={props.editor}
        shouldShow={() => true}
        tippyOptions={{
          getReferenceClientRect: getMenuCoords,
          duration: 100,
          placement: "left-start",
          sticky: true,
        }}
      >
        {topLevelNodeType !== "title" && (
          <div
            className="floating-menu"
            onDragEnd={(event: any) => handleDragEnd(event)}
          >
            <div className="flex flex-row">
              <button className="my-[5px] p-1 hover:bg-slate-100 rounded">
                <IconPlus color="gray" size={20} />
              </button>
              <button
                id="drag"
                className="my-[5px] p-1 hover:bg-slate-100 rounded"
                draggable={dragging}
                onMouseDown={startDragging}
              >
                <IconGripVertical color="gray" size={20} />
              </button>
            </div>
          </div>
        )}
      </FloatingMenu>
    </div>
  );
}
