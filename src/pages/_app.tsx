import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import type { AppProps } from "next/app";
import Header from "./header";

const { Heading, Form, FormLabel, Input, Checkbox, Link, Button } =
  chakraTheme.components;

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "blackAlpha.100",
      },
    },
  },
  components: {
    Heading,
    Form,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Button,
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
