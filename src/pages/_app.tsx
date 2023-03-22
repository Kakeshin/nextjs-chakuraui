import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import type { AppProps } from "next/app";
import Header from "./header";
import Head from "next/head";

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keyword"
          content="かけしん, カケシン, kakeshin, Kakeshin, dev, Dev, kakeshin dev, kakeshin Dev, kakeshinDev, Kakeshin Dev, Kakeshin dev, KakeshinDev"
        />
        <meta
          name="description"
          content="Webサイト開発の自己学習を行なっている道産子エンジニア"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
