import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: any) => (
  <React.Fragment>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>
      {`
        body {
          margin: 0;
          background-color: rgb(245, 245, 245);
        }
      `}
    </style>
    <Component {...pageProps} />
  </React.Fragment>
);

export default MyApp;
