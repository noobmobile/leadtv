import React, { useContext } from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import FontContext from "../../contexts/FontContext";

const MovieDrawer = ({ movie, setOpen, genres }) => {
  const [fontSize, , calc] = useContext(FontContext);

  const cancel = () => {
    setOpen(false);
  };

  return (
    <Drawer placement="bottom" size="xl" isOpen={movie} onClose={cancel}>
      <DrawerOverlay />
      <DrawerContent h="300px" bg="#2C3949">
        <DrawerBody p="6" display="flex">
          <Box w="30%" h="100%" bg="tomato" borderRadius="10px" shadow="xl">
            <Image
              w="100%"
              h="100%"
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              alt="Poster do filme"
            />
          </Box>
          <Box w="70%" h="100%" px={3}>
            <Box h="60%" overflowY="auto">
              <Text fontSize={calc("2.25rem")} color="white" as="h1">
                {movie.title}
              </Text>
              <Text fontSize={calc("0.9rem")} color="gray.400">
                {movie.overview || "Sem sinopse."}
              </Text>
            </Box>
            <HStack h="40%" spacing={4} overflowX="auto">
              <Box>
                <Text fontSize={calc("1.25rem")} color="gray.200">
                  Nota
                </Text>
                <Text fontSize={calc("1.5rem")} color="green.300">
                  {movie.vote_average}/10
                </Text>
              </Box>
              <Box>
                <Text fontSize={calc("1.25rem")} color="gray.200">
                  Data de Lançamento
                </Text>
                <Text fontSize={calc("1.5rem")} color="green.300">
                  {movie.release_date}
                </Text>
              </Box>
              <Box>
                <Text fontSize={calc("1.25rem")} color="gray.200">
                  Gêneros
                </Text>
                <Text fontSize={calc("1.5rem")} color="green.300">
                  {movie.genre_ids
                    ?.map((id) => genres.find((genre) => genre.id === id)?.name)
                    .join(", ")}
                </Text>
              </Box>
            </HStack>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MovieDrawer;
