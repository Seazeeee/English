import {
  useColorMode,
  Flex,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon } from "./moon.js";
import { SunIcon } from "./sun.js";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Flex position="absolute" top="20rem" right="1rem" align="center">
        <Flex display={["none", "none", "flex", "flex"]}>
        <NextLink href="https://github.com/Seazeeee/English" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Source"
              my={5}
              mr={2}
              w="100%"
            >
              Source
            </Button>
          </NextLink>
        </Flex>
        <Box>
          {colorMode === "dark" ? (
            <IconButton
              aria-label="dark"
              bg="transparent"
              icon={<SunIcon />}
              onClick={toggleColorMode}
              my={5}
              w="100%"
            />
          ) : (
            <IconButton
              aria-label="light"
              bg="transparent"
              icon={<MoonIcon />}
              onClick={toggleColorMode}
              my={5}
              w="100%"
            />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
