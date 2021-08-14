import React from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: any) => (
  <React.Fragment>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <style jsx global>
      {`
        body {
          margin: 0;
          background-color: rgb(18, 18, 18);
          font-family: 'Roboto', sans-serif;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </React.Fragment>
);

export default MyApp;
