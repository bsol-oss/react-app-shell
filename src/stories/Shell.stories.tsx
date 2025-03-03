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
import { Badge, Flex, Grid, Image } from "@chakra-ui/react";
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
                <NavButton
                  label="Home"
                  icon={<FaHome />}
                  buttonProps={{
                    onClick: () => {},
                  }}
                />
                <NavButton
                  label="About"
                  icon={<FaInfoCircle />}
                />
                <NavButton label="Blog" icon={<FaPenNib />} />
                <NavButton
                  label="Portfolio"
                  icon={<FaBriefcase />}
                />
                <NavButton
                  label="Contact"
                  icon={<FaEnvelope />}
                  buttonProps={{
                    onClick: () => {
                      console.log("good");
                    },
                  }}
                />
                <NavButton
                  label="Services"
                  icon={<FaTools />}
                  tag={<Badge>{"nice"}</Badge>}
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
                  avatarProps={{
                    name: "Lorrem picsum",
                    src: "https://picsum.photos/300/200?grayscale",
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
