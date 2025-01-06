export interface UserButtonProps {
    user: {
        avatar: string;
        name: string;
    };
}
declare const UserButton: ({ user }: UserButtonProps) => import("react/jsx-runtime").JSX.Element;
export default UserButton;
