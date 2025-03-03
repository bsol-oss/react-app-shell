import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview";
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled";

import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";
import { Flex, Grid } from "@chakra-ui/react";
import {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef
} from "react";
import invariant from "tiny-invariant";
import { useShellContext } from "./useShellContext";

export interface WidthsConfig {
  start: number;
  min: number;
  max: number;
}
export interface SidebarProps {
  navigation: ReactNode;
}

function getProposedWidth({
  initialWidth,
  location,
  widths,
}: {
  initialWidth: number;
  location: DragLocationHistory;
  widths: WidthsConfig;
}): number {
  const diffX = location.current.input.clientX - location.initial.input.clientX;
  const proposedWidth = initialWidth + diffX;

  // ensure we don't go below the min or above the max allowed widths
  return Math.min(Math.max(widths.min, proposedWidth), widths.max);
}

const Sidebar = ({ navigation }: SidebarProps) => {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  // const [state, setState] = useState<State>({
  //   type: "idle",
  // });
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { sidebarWidth, setSidebarWidth, widths } = useShellContext();

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
        // setState({ type: "dragging" });
      },
      onDrag({ location }) {
        contentRef.current?.style.setProperty(
          "--local-resizing-width",
          `${getProposedWidth({ initialWidth: sidebarWidth, location, widths })}px`
        );
      },
      onDrop({ location }) {
        preventUnhandled.stop();
        // setState({ type: "idle" });

        setSidebarWidth(
          getProposedWidth({ initialWidth: sidebarWidth, location, widths })
        );
        contentRef.current?.style.removeProperty("--local-resizing-width");
      },
    });
  }, [sidebarWidth, setSidebarWidth, widths]);
  return (
    <Flex width={`${sidebarWidth}px`}>
      <Grid
        flexGrow={"1"}
        flexShrink={"1"}
        ref={contentRef}
        position={"sticky"}
        top={"0rem"}
        as="section"
        height={"100dvh"}
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
        width={"1"}
        bgColor={"transparent"}
        flexGrow={"0"}
        flexShrink={"0"}
        _before={{
          content: '""',
          position: "relative",
          width: "0.5",
          top: 0,
          cursor: "col-resize",
          left: 0.5,
          bgColor: "gray.400/20",
          display: "block",
        }}
      />
    </Flex>
  );
};

export default Sidebar;
