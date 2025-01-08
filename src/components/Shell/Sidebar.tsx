import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview";
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled";

import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";
import { Flex, Grid } from "@chakra-ui/react";
import {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { State } from "react-beautiful-dnd";
import invariant from "tiny-invariant";

export interface SidebarProps {
  navigation: ReactNode;
  sidebarWidth: number;
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}

const widths = {
  start: 260,
  min: 120,
  max: 450,
};

function getProposedWidth({
  initialWidth,
  location,
}: {
  initialWidth: number;
  location: DragLocationHistory;
}): number {
  const diffX = location.current.input.clientX - location.initial.input.clientX;
  const proposedWidth = initialWidth + diffX;

  // ensure we don't go below the min or above the max allowed widths
  return Math.min(Math.max(widths.min, proposedWidth), widths.max);
}

const Sidebar = ({
  navigation,
  sidebarWidth,
  setSidebarWidth,
}: SidebarProps) => {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<State>({
    type: "idle",
  });
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const divider = dividerRef.current;
    invariant(divider);

    return draggable({
      element: divider,
      onGenerateDragPreview: ({ nativeSetDragImage }) => {
        // we will be moving the line to indicate a drag
        // we can disable the native drag preview
        disableNativeDragPreview({ nativeSetDragImage });
        // we don't want any native drop animation for when the user
        // does not drop on a drop target. we want the drag to finish immediately
        preventUnhandled.start();
      },
      onDragStart() {
        setState({ type: "dragging" });
      },
      onDrag({ location }) {
        contentRef.current?.style.setProperty(
          "--local-resizing-width",
          `${getProposedWidth({ initialWidth: sidebarWidth, location })}px`
        );
      },
      onDrop({ location }) {
        preventUnhandled.stop();
        setState({ type: "idle" });

        setSidebarWidth(
          getProposedWidth({ initialWidth: sidebarWidth, location })
        );
        contentRef.current?.style.removeProperty("--local-resizing-width");
      },
    });
  }, [sidebarWidth, setSidebarWidth]);
  return (
    <Flex
      position={"sticky"}
      top={"0rem"}
      left={"0rem"}
      as="section"
      height={"100dvh"}
      width={`${sidebarWidth}px`}
    >
      <Grid
        flexGrow={"1"}
        flexShrink={"1"}
        ref={contentRef}
        overflow={"auto"}
        style={
          { "--local-initial-width": `${sidebarWidth}px` } as CSSProperties
        }
      >
        {navigation}
      </Grid>
      <Flex
        ref={dividerRef}
        cursor={"col-resize"}
        width={"4"}
        bgColor={"transparent"}
        flexGrow={"0"}
        flexShrink={"0"}
        _before={{
          content: '""',
          position: "relative",
          width: "0.5",
          top: 0,
          cursor: "col-resize",
          left: 0,
          bgColor: "gray.400/20",
          display: "block",
        }}
      />
    </Flex>
  );
};

export default Sidebar;
