import React, { useContext } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import FontContext from "../../contexts/FontContext";

const MovieCard = ({ movie, openDrawer }) => {
  const [fontSize, , calc] = useContext(FontContext);

  return (
    <Box
      bg="tomato"
      borderRadius="10px"
      shadow="xl"
      cursor="pointer"
      minH="190px"
      transition="transform .3s"
      _hover={{ transform: "scale(1.1)" }}
      position="relative"
      onClick={() => openDrawer(movie)}
    >
      <Image
        w="100%"
        h="100%"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
            : "https://t.ctcdn.com.br/BLYZJJjVU7Cq3l10sT5SyCfFKoA=/87x0:1499x795/1400x788/smart/i323610.png"
        }
        alt="Poster do filme"
      />
      <Box
        position="absolute"
        top="0"
        right="0"
        borderRadius="5px"
        m={1}
        p={1}
        bg="rgba(0, 0, 0, .8)"
        color="white"
        display="flex"
        flexDir="row"
        alignItems="center"
      >
        <AiFillStar style={{ marginRight: 5 }} />
        <Text fontSize={calc("14px", 1)}>{movie.vote_average}</Text>
      </Box>
    </Box>
  );
};

export default MovieCard;
