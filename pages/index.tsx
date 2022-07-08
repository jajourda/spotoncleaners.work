import Head from 'next/head'
import Layout from '../components/Layout'
import LandingPageHeader from '../components/LandingPageHeader'
import FeatureSection from '../components/FeatureSection'
import TitledCtaSection from '../components/TiltedCtaSection'
import JumboSectionHeadingImg from '../components/JumboSectionHeadingImg'



export default function Home() {
  return (
    <Layout>

      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <LandingPageHeader />

      <JumboSectionHeadingImg line1='we work' line2='with you' />


      <FeatureSection bg='richBlue' title='our services' subTitle="Here's the work we do" imgHeading='So Many Cleaning Service Options' imgText='SpotOn Cleaners provides a full range of services to meet your residential and commercial cleaning needs. Our services are designed to support you, not replace you or screen you out. Go to our services page to see more options.' imgOrder='first' />
      <JumboSectionHeadingImg line1='call us' line2='today' />

      <TitledCtaSection heading='one sec...' line1='Call us today!' line2="We'll get it done." linkHref='tel: 843-408-6280' linkText='843-408-6280' imgSrc='/images/80phoneyellow.jpg' imgAlt='kudos for the image' />

    </Layout>
  )
}
