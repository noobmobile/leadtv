import React, { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import FontContext from "../contexts/FontContext";

const Navbar = () => {
  const [fontSize, setFontSize] = useContext(FontContext);

  function increase() {
    if (fontSize >= 3) return;
    setFontSize(fontSize + 1);
  }

  function decrease() {
    if (fontSize <= -3) return;
    setFontSize(fontSize - 1);
  }

  return (
    <Box
      w="100%"
      h="50px"
      bg="tomato"
      display="flex"
      alignItems="center"
      justifyContent="end"
      px={3}
      zIndex={2000}
      top={0}
      position="fixed"
    >
      <Button variant="outline" bg="white" onClick={increase}>
        A+
      </Button>
      <Button
        variant="outline"
        bg="white"
        ml={2}
        onClick={() => setFontSize(0)}
      >
        A
      </Button>
      <Button variant="outline" bg="white" ml={2} onClick={decrease}>
        A-
      </Button>
    </Box>
  );
};

export default Navbar;
