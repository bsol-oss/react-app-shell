# React Datatable

## Installation

```bash
npm install @chakra-ui/react @emotion/react @bsol-oss/react-shell
```

## Usage

### Shell

```tsx
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
```


## Development

```
npm install
npm run storybook
```
