import { ApolloProvider } from "@apollo/client";
// import client from "../lib/apollo-client";
import type { AppProps } from "next/app";
import { useApollo } from "lib/apollo-client";
import { StyleProvider } from "@ant-design/cssinjs";

import "styles/index.scss";
// import "antd/dist/reset.css";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <StyleProvider hashPriority="low">
        <Component {...pageProps} />
      </StyleProvider>
    </ApolloProvider>
  );
}

export default App;

// import React from 'react';
// import { ConfigProvider } from 'antd';
// import type { AppProps } from 'next/app';

// import theme from './theme/themeConfig';

// const App = ({ Component, pageProps }: AppProps) => (
//   <ConfigProvider theme={theme}>
//     <Component {...pageProps} />
//   </ConfigProvider>
// );

// export default App;
