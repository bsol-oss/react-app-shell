import Shell from "@/components/Shell/Shell";
import { Provider } from "@/components/ui/provider";
import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import NavButton from "@/components/Controls/NavButton";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaPenNib,
  FaTools,
} from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Shell> = {
  component: Shell,
};

export default meta;
type Story = StoryObj<typeof Shell>;

export const PersonalBlog: Story = {
  render: () => {
    return (
      <Provider>
        <Shell
          navigation={
            <Flex flexFlow={"column"} padding={"1rem"}>
              <NavButton
                href={"/"}
                label="Home"
                icon={
                  <>
                    <FaHome />
                  </>
                }
              />
              <NavButton
                href={"/about"}
                label="About"
                icon={
                  <>
                    <FaInfoCircle />
                  </>
                }
              />
              <NavButton
                href={"/blog"}
                label="Blog"
                icon={
                  <>
                    <FaPenNib />
                  </>
                }
              />
              <NavButton
                href={"/portfolio"}
                label="Portfolio"
                icon={
                  <>
                    <FaBriefcase />
                  </>
                }
              />
              <NavButton
                href={"/contact"}
                label="Contact"
                icon={
                  <>
                    <FaEnvelope />
                  </>
                }
              />
              <NavButton
                href={"/services"}
                label="Services"
                icon={
                  <>
                    <FaTools />
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
