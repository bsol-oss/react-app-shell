import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Button, Flex, Text, Avatar as Avatar$1, Group, Grid } from '@chakra-ui/react';
import * as React from 'react';
import { createContext, useContext, useRef, useState, useEffect } from 'react';
import { RxWidth } from 'react-icons/rx';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import { preventUnhandled } from '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled';
import invariant from 'tiny-invariant';

const ShellContext = createContext({
    sidebarWidth: 100,
    setSidebarWidth: ((prevState) => {
        return prevState;
    }),
});

const useShellContext = () => {
    const { sidebarWidth, setSidebarWidth } = useContext(ShellContext);
    return {
        sidebarWidth,
        setSidebarWidth,
    };
};

const NavButton = ({ buttonProps = {}, tag = jsx(Fragment, {}), icon = jsx(Fragment, {}), label = "", }) => {
    const { sidebarWidth } = useShellContext();
    if (sidebarWidth < 200) {
        return (jsx(Button, { variant: "ghost", justifyContent: "center", overflowX: "hidden", ...buttonProps, children: icon }));
    }
    return (jsxs(Button, { variant: "ghost", justifyContent: "start", overflowX: "hidden", display: "grid", gap: "3", alignItems: "center", gridTemplateColumns: "auto 1fr", ...buttonProps, children: [icon, label !== "" && (jsxs(Flex, { alignItems: "center", gap: "2", children: [jsx(Text, { fontSize: "md", fontWeight: "lighter", textOverflow: "ellipsis", children: label }), tag] }))] }));
};

const Avatar = React.forwardRef(function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;
    return (jsxs(Avatar$1.Root, { ref: ref, ...rest, children: [jsx(AvatarFallback, { name: name, icon: icon, children: fallback }), jsx(Avatar$1.Image, { src: src, srcSet: srcSet, loading: loading }), children] }));
});
const AvatarFallback = React.forwardRef(function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props;
    return (jsxs(Avatar$1.Fallback, { ref: ref, ...rest, children: [children, name != null && children == null && jsx(Fragment, { children: getInitials(name) }), name == null && children == null && (jsx(Avatar$1.Icon, { asChild: !!icon, children: icon }))] }));
});
function getInitials(name) {
    const names = name.trim().split(" ");
    const firstName = names[0] != null ? names[0] : "";
    const lastName = names.length > 1 ? names[names.length - 1] : "";
    return firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`
        : firstName.charAt(0);
}
React.forwardRef(function AvatarGroup(props, ref) {
    const { size, variant, borderless, ...rest } = props;
    return (jsx(Avatar$1.PropsProvider, { value: { size, variant, borderless }, children: jsx(Group, { gap: "0", spaceX: "-3", ref: ref, ...rest }) }));
});

const UserButton = ({ user }) => {
    const { avatar, name } = user;
    const { sidebarWidth } = useShellContext();
    if (sidebarWidth < 200) {
        return (jsx(Button, { as: Flex, justifyContent: "center", alignItems: "center", variant: "ghost", height: "min-content", children: jsx(Avatar, { src: avatar }) }));
    }
    return (jsxs(Button, { as: Flex, justifyContent: "start", alignItems: "center", padding: "2", variant: "ghost", gap: "4", height: "min-content", children: [jsx(Avatar, { src: avatar }), jsx(Text, { textOverflow: "ellipsis", overflow: "hidden", children: name })] }));
};

const widths = {
    start: 260,
    min: 120,
    max: 450,
};
function getProposedWidth({ initialWidth, location, }) {
    const diffX = location.current.input.clientX - location.initial.input.clientX;
    const proposedWidth = initialWidth + diffX;
    // ensure we don't go below the min or above the max allowed widths
    return Math.min(Math.max(widths.min, proposedWidth), widths.max);
}
const Sidebar = ({ navigation, sidebarWidth, setSidebarWidth, }) => {
    const dividerRef = useRef(null);
    const [state, setState] = useState({
        type: "idle",
    });
    const contentRef = useRef(null);
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
                contentRef.current?.style.setProperty("--local-resizing-width", `${getProposedWidth({ initialWidth: sidebarWidth, location })}px`);
            },
            onDrop({ location }) {
                preventUnhandled.stop();
                setState({ type: "idle" });
                setSidebarWidth(getProposedWidth({ initialWidth: sidebarWidth, location }));
                contentRef.current?.style.removeProperty("--local-resizing-width");
            },
        });
    }, [sidebarWidth, setSidebarWidth]);
    return (jsxs(Flex, { width: `${sidebarWidth}px`, children: [jsx(Grid, { flexGrow: "1", flexShrink: "1", ref: contentRef, position: "sticky", top: "0rem", as: "section", height: "100dvh", style: { "--local-initial-width": `${sidebarWidth}px` }, children: navigation }), jsx(Flex, { ref: dividerRef, cursor: "col-resize", width: "1", bgColor: "transparent", flexGrow: "0", flexShrink: "0", _before: {
                    content: '""',
                    position: "relative",
                    width: "0.5",
                    top: 0,
                    cursor: "col-resize",
                    left: 0.5,
                    bgColor: "gray.400/20",
                    display: "block",
                } })] }));
};

const ResizeButton = ({ buttonProps = {}, icon = (jsx(Fragment, { children: jsx(RxWidth, {}) })), }) => {
    const { sidebarWidth, setSidebarWidth } = useShellContext();
    return (jsx(Button, { variant: "ghost", justifyContent: "center", overflowX: "hidden", onClick: () => {
            if (sidebarWidth > widths.min) {
                setSidebarWidth(widths.min);
                return;
            }
            if (sidebarWidth == widths.min) {
                setSidebarWidth(widths.max);
                return;
            }
            if (sidebarWidth == widths.max) {
                setSidebarWidth(widths.min);
                return;
            }
        }, ...buttonProps, children: icon }));
};

const Shell = ({ children, navigation }) => {
    const [sidebarWidth, setSidebarWidth] = useState(200);
    const shared = {
        sidebarWidth: sidebarWidth,
        setSidebarWidth: setSidebarWidth,
    };
    return (jsx(ShellContext.Provider, { value: shared, children: jsxs(Grid, { as: "section", gridTemplateColumns: "auto 1fr", width: "100dvw", height: "100dvh", overflow: 'auto', children: [jsx(Sidebar, { navigation: navigation, ...shared }), children] }) }));
};

export { NavButton, ResizeButton, Shell, UserButton };
