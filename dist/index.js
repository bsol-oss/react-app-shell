'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');
var React = require('react');
require('@atlaskit/pragmatic-drag-and-drop/element/adapter');
require('@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview');
require('@atlaskit/pragmatic-drag-and-drop/prevent-unhandled');
require('tiny-invariant');

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

React.createContext({
    sidebarWidth: 100,
    setSidebarWidth: ((prevState) => {
        return prevState;
    }),
});

React__namespace.forwardRef(function Avatar(props, ref) {
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
