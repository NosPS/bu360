import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppWrapper } from '../app/state';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Metaverse</title>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  )
}

export default MyApp
