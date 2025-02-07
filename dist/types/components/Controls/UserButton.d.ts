export interface User {
    name: string;
    avatar: string;
}
export interface UserButtonProps {
    user: User;
}
export declare const UserButton: ({ user }: UserButtonProps) => import("react/jsx-runtime").JSX.Element;
