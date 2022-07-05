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


      <h2 className="text-[100px] leading-[125px] md:text-[150px] md:leading-[175px] lg:text-[200px] lg:leading-[225px]  text-richBlue font-bold tracking-tight aquino">we work <br />with you</h2>






    </Layout>
  )
}
