import Shell from "@/components/Shell/Shell";
import { Provider } from "@/components/ui/provider";
import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta: Meta<typeof Shell> = {
  component: Shell,
};

export default meta;
type Story = StoryObj<typeof Shell>;

export const WithAArticle: Story = {
  render: () => {
    return (
      <Provider>
        <Shell>
          <App />
        </Shell>
      </Provider>
    );
  },
};
