import Shell from "@/components/Shell/Shell";
import { Provider } from "@/components/ui/provider";
import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import NavButton from "@/components/Controls/NavButton";
import { FaHome } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Shell> = {
  component: Shell,
};

export default meta;
type Story = StoryObj<typeof Shell>;

export const WithAArticle: Story = {
  render: () => {
    return (
      <Provider>
        <Shell
          navigation={
            <Flex flexFlow={"column"} padding={"1rem"}>
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"hi"}
                label="hi"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
            </Flex>
          }
          user={{
            name: "Lorrem picsum",
            avatar: "https://picsum.photos/300/200?grayscale",
          }}
          logo={"https://picsum.photos/300/200?grayscale"}
        >
          <App />
        </Shell>
      </Provider>
    );
  },
};
