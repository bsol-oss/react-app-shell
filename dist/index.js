'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');
var React = require('react');
var rx = require('react-icons/rx');
var adapter = require('@atlaskit/pragmatic-drag-and-drop/element/adapter');
var disableNativeDragPreview = require('@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview');
var preventUnhandled = require('@atlaskit/pragmatic-drag-and-drop/prevent-unhandled');
var invariant = require('tiny-invariant');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const ShellContext = React.createContext({
    sidebarWidth: 100,
    setSidebarWidth: ((prevState) => {
        return prevState;
    }),
});

const useShellContext = () => {
    const { sidebarWidth, setSidebarWidth } = React.useContext(ShellContext);
    return {
        sidebarWidth,
        setSidebarWidth,
    };
};

const NavButton = ({ buttonProps = {}, tag = jsxRuntime.jsx(jsxRuntime.Fragment, {}), icon = jsxRuntime.jsx(jsxRuntime.Fragment, {}), label = "", }) => {
    const { sidebarWidth } = useShellContext();
    if (sidebarWidth < 200) {
        return (jsxRuntime.jsx(react.Button, { variant: "ghost", justifyContent: "center", overflowX: "hidden", ...buttonProps, children: icon }));
    }
    return (jsxRuntime.jsxs(react.Button, { variant: "ghost", justifyContent: "start", overflowX: "hidden", display: "grid", gap: "3", alignItems: "center", gridTemplateColumns: "auto 1fr", ...buttonProps, children: [icon, label !== "" && (jsxRuntime.jsxs(react.Flex, { alignItems: "center", gap: "2", children: [jsxRuntime.jsx(react.Text, { fontSize: "md", fontWeight: "lighter", textOverflow: "ellipsis", children: label }), tag] }))] }));
};

const Avatar = React__namespace.forwardRef(function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;
    return (jsxRuntime.jsxs(react.Avatar.Root, { ref: ref, ...rest, children: [jsxRuntime.jsx(AvatarFallback, { name: name, icon: icon, children: fallback }), jsxRuntime.jsx(react.Avatar.Image, { src: src, srcSet: srcSet, loading: loading }), children] }));
});
const AvatarFallback = React__namespace.forwardRef(function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props;
    return (jsxRuntime.jsxs(react.Avatar.Fallback, { ref: ref, ...rest, children: [children, name != null && children == null && jsxRuntime.jsx(jsxRuntime.Fragment, { children: getInitials(name) }), name == null && children == null && (jsxRuntime.jsx(react.Avatar.Icon, { asChild: !!icon, children: icon }))] }));
});
function getInitials(name) {
    const names = name.trim().split(" ");
    const firstName = names[0] != null ? names[0] : "";
    const lastName = names.length > 1 ? names[names.length - 1] : "";
    return firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`
        : firstName.charAt(0);
}
React__namespace.forwardRef(function AvatarGroup(props, ref) {
    const { size, variant, borderless, ...rest } = props;
    return (jsxRuntime.jsx(react.Avatar.PropsProvider, { value: { size, variant, borderless }, children: jsxRuntime.jsx(react.Group, { gap: "0", spaceX: "-3", ref: ref, ...rest }) }));
});

const UserButton = ({ user }) => {
    const { avatar, name } = user;
    const { sidebarWidth } = useShellContext();
    if (sidebarWidth < 200) {
        return (jsxRuntime.jsx(react.Button, { as: react.Flex, justifyContent: "center", alignItems: "center", variant: "ghost", height: "min-content", children: jsxRuntime.jsx(Avatar, { src: avatar }) }));
    }
    return (jsxRuntime.jsxs(react.Button, { as: react.Flex, justifyContent: "start", alignItems: "center", padding: "2", variant: "ghost", gap: "4", height: "min-content", children: [jsxRuntime.jsx(Avatar, { src: avatar }), jsxRuntime.jsx(react.Text, { textOverflow: "ellipsis", overflow: "hidden", children: name })] }));
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
    const dividerRef = React.useRef(null);
    const [state, setState] = React.useState({
        type: "idle",
    });
    const contentRef = React.useRef(null);
    React.useEffect(() => {
        const divider = dividerRef.current;
        invariant(divider);
        return adapter.draggable({
            element: divider,
            onGenerateDragPreview: ({ nativeSetDragImage }) => {
                // we will be moving the line to indicate a drag
                // we can disable the native drag preview
                disableNativeDragPreview.disableNativeDragPreview({ nativeSetDragImage });
                // we don't want any native drop animation for when the user
                // does not drop on a drop target. we want the drag to finish immediately
                preventUnhandled.preventUnhandled.start();
            },
            onDragStart() {
                setState({ type: "dragging" });
            },
            onDrag({ location }) {
                contentRef.current?.style.setProperty("--local-resizing-width", `${getProposedWidth({ initialWidth: sidebarWidth, location })}px`);
            },
            onDrop({ location }) {
                preventUnhandled.preventUnhandled.stop();
                setState({ type: "idle" });
                setSidebarWidth(getProposedWidth({ initialWidth: sidebarWidth, location }));
                contentRef.current?.style.removeProperty("--local-resizing-width");
            },
        });
    }, [sidebarWidth, setSidebarWidth]);
    return (jsxRuntime.jsxs(react.Flex, { width: `${sidebarWidth}px`, children: [jsxRuntime.jsx(react.Grid, { flexGrow: "1", flexShrink: "1", ref: contentRef, position: "sticky", top: "0rem", as: "section", height: "100dvh", style: { "--local-initial-width": `${sidebarWidth}px` }, children: navigation }), jsxRuntime.jsx(react.Flex, { ref: dividerRef, cursor: "col-resize", width: "1", bgColor: "transparent", flexGrow: "0", flexShrink: "0", _before: {
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

const ResizeButton = ({ buttonProps = {}, icon = (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(rx.RxWidth, {}) })), }) => {
    const { sidebarWidth, setSidebarWidth } = useShellContext();
    return (jsxRuntime.jsx(react.Button, { variant: "ghost", justifyContent: "center", overflowX: "hidden", onClick: () => {
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
    const [sidebarWidth, setSidebarWidth] = React.useState(200);
    const shared = {
        sidebarWidth: sidebarWidth,
        setSidebarWidth: setSidebarWidth,
    };
    return (jsxRuntime.jsx(ShellContext.Provider, { value: shared, children: jsxRuntime.jsxs(react.Grid, { as: "section", gridTemplateColumns: "auto 1fr", width: "100dvw", height: "100dvh", overflow: 'auto', children: [jsxRuntime.jsx(Sidebar, { navigation: navigation, ...shared }), children] }) }));
};

exports.NavButton = NavButton;
exports.ResizeButton = ResizeButton;
exports.Shell = Shell;
exports.UserButton = UserButton;
