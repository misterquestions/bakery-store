import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <p>Custom document</p>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument