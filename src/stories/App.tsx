import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const App = () => {
  const articles = [
    {
      title: "The Wonders of the Ocean: Exploring Marine Life",
      author: "Jane Doe",
      date: "January 3, 2025",
      content: `
          The ocean covers more than 70% of our planet's surface and is home to an astonishing variety of life forms. From the smallest plankton to the largest whales, marine life is as Boxerse as it is fascinating.
          
          Recent studies have revealed new species and ecosystems that thrive in the depths of the ocean, often in conditions that were previously thought to be inhospitable. These discoveries not only expand our understanding of biology but also highlight the importance of ocean conservation.
          
          As we continue to explore the mysteries of the deep sea, we uncover valuable insights into climate change, biodiversity, and the health of our planet. It is crucial that we protect these underwater ecosystems to ensure they continue to thrive for generations to come.
        `,
    },
    {
      title: "The Rise of Renewable Energy: A Sustainable Future",
      author: "John Smith",
      date: "December 28, 2024",
      content: `
          As the world grapples with climate change, renewable energy has emerged as a critical solution. Solar, wind, and hydroelectric power are becoming increasingly viable alternatives to fossil fuels.
          
          Innovations in technology have made renewable energy sources more efficient and affordable. Countries around the globe are investing in green infrastructure, aiming for a sustainable future that reduces carbon emissions and conserves natural resources.
          
          The transition to renewable energy not only benefits the environment but also creates jobs and stimulates economic growth. It is essential that we continue to support these initiatives for a healthier planet.
        `,
    },
    {
      title: "Exploring the Cosmos: The Future of Space Travel",
      author: "Alice Johnson",
      date: "January 1, 2025",
      content: `
          Humanity's fascination with space has led to unprecedented advancements in technology and exploration. With private companies entering the space race, we are on the brink of a new era in space travel.
          
          Missions to Mars and beyond are no longer just dreams; they are becoming plans with timelines. The potential for colonizing other planets raises questions about our future as a species and our responsibility towards other celestial bodies.
          
          As we look to the stars, it is vital that we approach space exploration ethically and sustainably, ensuring that we learn from our past mistakes on Earth.
        `,
    },
  ];

  return (
    <Flex gap={"1rem"} flexFlow={"column"} padding={"1rem"}>
      <Box>
        <h1>Latest Articles</h1>
      </Box>
      <Flex gap={"1rem"} flexFlow={"column"}>
        {articles.map((article, index) => (
          <Flex gap={"1rem"} flexFlow={"column"} key={index}>
            <Heading>{article.title}</Heading>
            <Text>
              <Text as={"span"}>By:</Text> {article.author}
            </Text>
            <Text>
              <Text as={"span"}>Published on:</Text> {article.date}
            </Text>
            <Text>{article.content}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
