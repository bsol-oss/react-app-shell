import Shell from "@/components/Shell/Shell";
import { Provider } from "@/components/ui/provider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Shell> = {
  component: Shell,
};

export default meta;
type Story = StoryObj<typeof Shell>;

// export const FirstStory: Story = {
//   args: {
//     //👇 The args you need here will depend on your component
//   },
// };

export const WithAnImage: Story = {
  render: () => {
    return (
      <Provider>
        <Shell />
      </Provider>
    );
  },
};
