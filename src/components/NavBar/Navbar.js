import React from "react";
import { Box, Heading, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./navbar.css";

export const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <div className="navbar-head">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="white"
        color="black"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" ml="2rem" size="lg" letterSpacing={"tighter"}>
            MyNoteApp
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            variant="outline"
            _hover={{ bg: "#87CEEB", borderColor: "#87CEEB" }}
            borderWidth="2px"
          >
            Signup
          </Button>

          <Button
            variant="outline"
            _hover={{ bg: "#87CEEB", borderColor: "#87CEEB" }}
            ml="2rem"
            mr="2rem"
            borderWidth="2px"
          >
            Login
          </Button>
        </Box>
      </Flex>
    </div>
  );
};
