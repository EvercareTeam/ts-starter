import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import preset from '@rebass/preset';

export default class MyDocument extends Document {
  public render(): JSX.Element {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          <ThemeProvider theme={preset}>
            <div className="root">{main}</div>
          </ThemeProvider>
          <NextScript />
        </body>
      </html>
    );
  }
}
