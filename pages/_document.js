import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/public/aquino/stylesheet.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
