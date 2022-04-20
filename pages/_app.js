import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../theme.js";
import { AnimatePresence } from "framer-motion";
import { DarkModeSwitch } from "../components/DarkModeSwitch.js";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
        <DarkModeSwitch />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
