import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import category from "../data/categories";
import CategoryCard from "./CategoryCard";

const CardGrid = () => {
  return (
    <>
      <Box py={10}>
        <Heading textAlign={"center"}>Different Tracks Available</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} py={5}>
          {category.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CardGrid;
