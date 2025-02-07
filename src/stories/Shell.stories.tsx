import { Shell } from "@/components/Shell/Shell";
import { Provider } from "@/components/ui/provider";
import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import { NavButton } from "@/components/Controls/NavButton";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaPenNib,
  FaTools,
} from "react-icons/fa";
import { Flex, Grid, Image } from "@chakra-ui/react";
import { UserButton } from "@/components/Controls/UserButton";
import { ResizeButton } from "@/components/Controls/ResizeButton";

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
            <Grid
              templateRows={"auto 1fr auto"}
              flexFlow={"column"}
              padding={"1"}
              gap={"4"}
            >
              <Image
                justifySelf={"center"}
                src={"https://picsum.photos/300/200?grayscale"}
              ></Image>
              <Flex flexFlow={"column"}>
                <NavButton href={"/"} label="Home" icon={<FaHome />} />
                <NavButton
                  href={"/about"}
                  label="About"
                  icon={<FaInfoCircle />}
                />
                <NavButton href={"/blog"} label="Blog" icon={<FaPenNib />} />
                <NavButton
                  href={"/portfolio"}
                  label="Portfolio"
                  icon={<FaBriefcase />}
                />
                <NavButton
                  href={"/contact"}
                  label="Contact"
                  icon={<FaEnvelope />}
                  buttonProps={{
                    onClick: () => {
                      console.log("good");
                    },
                  }}
                />
                <NavButton
                  href={"/services"}
                  label="Services"
                  icon={<FaTools />}
                />
              </Flex>
              <Grid
                templateRows={" 1fr auto"}
                padding={"1"}
                gap={"4"}
                alignItems={"center"}
              >
                <ResizeButton />
                <UserButton
                  user={{
                    name: "Lorrem picsum",
                    avatar: "https://picsum.photos/300/200?grayscale",
                  }}
                />
              </Grid>
            </Grid>
          }
        >
          <App />
        </Shell>
      </Provider>
    );
  },
};
