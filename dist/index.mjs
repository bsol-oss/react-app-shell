import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Avatar, Group } from '@chakra-ui/react';
import * as React from 'react';
import { createContext, useContext } from 'react';
import 'react-icons/rx';
import '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled';
import 'tiny-invariant';

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

React.forwardRef(function Avatar$1(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;
    return (jsxs(Avatar.Root, { ref: ref, ...rest, children: [jsx(AvatarFallback, { name: name, icon: icon, children: fallback }), jsx(Avatar.Image, { src: src, srcSet: srcSet, loading: loading }), children] }));
});
const AvatarFallback = React.forwardRef(function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props;
    return (jsxs(Avatar.Fallback, { ref: ref, ...rest, children: [children, name != null && children == null && jsx(Fragment, { children: getInitials(name) }), name == null && children == null && (jsx(Avatar.Icon, { asChild: !!icon, children: icon }))] }));
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
    return (jsx(Avatar.PropsProvider, { value: { size, variant, borderless }, children: jsx(Group, { gap: "0", spaceX: "-3", ref: ref, ...rest }) }));
});

const widths = {
    start: 260,
    min: 120,
    max: 450,
};

export { useShellContext, widths };
