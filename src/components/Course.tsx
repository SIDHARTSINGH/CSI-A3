import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Course = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Stack flexGrow={1} p={10} align={"center"}>
        <Heading as={"h1"}>Courses</Heading>
        <Divider />
        <Text fontSize={"xl"} p={10}>
          Coming Soon
        </Text>
      </Stack>
      <Box as="footer" flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Course;
