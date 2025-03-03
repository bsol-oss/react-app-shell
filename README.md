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
```


## Development

```
npm install
npm run storybook
```
