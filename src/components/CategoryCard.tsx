import {
  Text,
  Stack,
  Button,
  Card,
  CardBody,
  Heading,
  CardFooter,
  CardHeader,
  Icon,
} from "@chakra-ui/react";
import { category } from "../data/categories";
import { Link } from "react-router-dom";

interface Props {
  category: category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Card align={"center"} p={2}>
      <CardHeader p={2}>
        <Stack alignItems={"center"}>
          <Icon as={category.icon} boxSize={"20"} />
          <Heading size="md">{category.name}</Heading>
        </Stack>
      </CardHeader>
      <CardBody padding={2}>
        <Text>{category.description}</Text>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          <Link to={"/courses"}>Explore</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
