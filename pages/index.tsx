import Head from 'next/head'
import Layout from '../components/Layout'
import LandingPageHeader from '../components/LandingPageHeader'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <LandingPageHeader />


      <h1>we can't wait to hear from you</h1>






    </Layout>
  )
}
