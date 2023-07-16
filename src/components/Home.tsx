import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import CardGrid from "./CategoryGrid";

const Hero = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={10}>
      <Stack spacing={4} align={"center"} justifyContent={"center"}>
        <Heading>Learning that gets you</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Skills for your present (and your future). Get started with us.
        </Text>
        <Button as={"a"} rounded={"md"} colorScheme={"messenger"}>
          Get Started
        </Button>
      </Stack>
      <Flex>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={
            "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          objectFit={"cover"}
        />
      </Flex>
    </SimpleGrid>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Container maxW={"5xl"} py={12}>
        <CardGrid />
      </Container>
    </>
  );
};

export default Home;
