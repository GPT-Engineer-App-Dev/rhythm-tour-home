import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to The Band's Official Tour Page
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our journey as we tour across the country. Get the latest updates, tour dates, and exclusive content right here!
        </Text>
        <Box boxSize="lg">
          <Image src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE3NDUzOTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing live" borderRadius="md" />
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Get Tickets
          </Button>
          <Button colorScheme="teal" size="lg" variant="outline">
            View Tour Dates
          </Button>
        </HStack>
        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg">
            Follow Us
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
