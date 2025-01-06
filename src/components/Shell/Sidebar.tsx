import {
  draggable,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview";
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled";

import { Avatar } from "@/components/ui/avatar";
import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { State } from "react-beautiful-dnd";
import invariant from "tiny-invariant";
import { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types";

export interface User {
  name: string;
  avatar: string;
}

export interface SidebarProps {
  navigation: ReactNode;
  user: User;
  logo: string;
}

const widths = {
  start: 260,
  min: 150,
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

const Sidebar = ({ navigation, user, logo }: SidebarProps) => {
  const [initialWidth, setInitialWidth] = useState(widths.start);
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
          `${getProposedWidth({ initialWidth, location })}px`
        );
      },
      onDrop({ location }) {
        preventUnhandled.stop();
        setState({ type: "idle" });

        setInitialWidth(getProposedWidth({ initialWidth, location }));
        contentRef.current?.style.removeProperty("--local-resizing-width");
      },
    });
  }, [initialWidth]);
  return (
    <Flex
      position={"sticky"}
      top={"0rem"}
      left={"0rem"}
      
      as="section"
      height={"100dvh"}
      width={`${initialWidth}px`}

    >
      <Grid
        gridTemplateRows={"auto 1fr auto"}
        flexGrow={'1'}
        flexShrink={'1'}
        ref={contentRef}
        overflow={"auto"}
        style={
          { "--local-initial-width": `${initialWidth}px` } as CSSProperties
        }
      >
        <Flex justifyContent={'center'}>
          <Image src={logo}></Image>
        </Flex>
        <Box>{navigation}</Box>
        <Button
          as={Flex}
          justifyContent={"start"}
          alignItems={"center"}
          padding={"0.5rem"}
          variant={"ghost"}
          gap={"1rem"}
          height={"min-content"}
        >
          <Avatar src={user.avatar} />

          <Box>{user.name}</Box>
        </Button>
      </Grid>
      <Flex
        ref={dividerRef}
        cursor={"col-resize"}
        width={'2rem'}
        bgColor={'transparent'}
        flexGrow={'0'}
        flexShrink={'0'}
        _before={{
          content: '""',
          position: "relative",
          width:"0.1rem",
          top: 0,
          cursor:"col-resize",
          left: '10px',
          bgColor: "gray.200",
          display:'block'
        }}
      />
    </Flex>
  );
};

export default Sidebar;
