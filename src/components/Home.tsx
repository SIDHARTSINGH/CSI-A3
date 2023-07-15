import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import CardGrid from "./CategoryGrid";

const Home = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
        <Stack spacing={4}>
          <Heading>Learning that gets you</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Skills for your present (and your future). Get started with us.
          </Text>
          <Box>
            <Button as={"a"} rounded={"md"} colorScheme={"messenger"}>
              Get Started
            </Button>
          </Box>
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
      <CardGrid />
    </Container>
  );
};

export default Home;
