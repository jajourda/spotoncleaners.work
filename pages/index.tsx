import Head from 'next/head'
import Layout from '../components/Layout'
import LandingPageHeader from '../components/LandingPageHeader'
import FeatureSection from '../components/FeatureSection'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <LandingPageHeader />


      <h2 className="text-[100px] leading-[125px] md:text-[150px] md:leading-[175px] lg:text-[200px] lg:leading-[225px] mb-32  text-richBlue font-bold tracking-tight aquino">we work <br />with you</h2>


      <FeatureSection bg='richBlue' title='our services' subTitle="Here's the work we do" imgHeading='So Many Cleaning Service Options' imgText='SpotOn Cleaners provides a full range of services to meet your residential and commercial cleaning needs. Our services are designed to support you, not replace you or screen you out. Go to our services page to see more options.' imgOrder='first' />



    </Layout>
  )
}
