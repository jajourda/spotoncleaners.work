import Head from 'next/head'
import Layout from '../components/Layout'
import LandingPageHeader from '../components/LandingPageHeader'
import FeatureSection from '../components/FeatureSection'
import TitledCtaSection from '../components/TiltedCtaSection'
import JumboSectionHeadingImg from '../components/JumboSectionHeadingImg'
import { getDataFromSheets } from "./api/sheets";


export default function Home(props: any) {
  console.log('test')
  console.log(props)
  return (
    <Layout>

      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <LandingPageHeader />

      <JumboSectionHeadingImg line1='we work' line2='with you' />


      <FeatureSection features={[
        { title: props.services[0].name, description: props.services[0].short },
        { title: props.services[1].name, description: props.services[1].short },
        { title: props.services[2].name, description: props.services[2].short },
        { title: props.services[3].name, description: props.services[3].short }
      ]} bg='richBlue' title='our services' subTitle="Here's the work we do" imgSrc="/images/servicesflex.jpg" imgHeading='So Many Cleaning Service Options' imgText='SpotOn Cleaners provides a full range of services to meet your residential and commercial cleaning needs. Our services are designed to support you, not replace you or screen you out. Go to our services page to see more options.' imgOrder='first' />
      <JumboSectionHeadingImg line1='call us' line2='today' />

      <TitledCtaSection heading='one sec...' line1='Call us today!' line2="We'll get it done." linkHref='tel: 843-408-6280' linkText='843-408-6280' imgSrc='/images/80phoneyellow.jpg' imgAlt='kudos for the image' />


      <JumboSectionHeadingImg line1='We want' line2='you' />
      <FeatureSection features={[
        { title: props.whyspoton[0].short, description: props.whyspoton[0].reason },
        { title: props.whyspoton[1].short, description: props.whyspoton[1].reason },
        { title: props.whyspoton[2].short, description: props.whyspoton[2].reason },
        { title: props.whyspoton[3].short, description: props.whyspoton[3].reason }
      ]} bg='richBlue' title='get fresh' subTitle="You should work with us" imgSrc="/images/why.jpg" imgHeading='Pick SpotOn Today' imgText='SpotOn Cleaners is not your average cleaning company: we have highly reliable cleaning systems, organized team methods, and efficient controls in place to guarantee customized results. We are a local, family-run business that desires to partner and build relationships with our clients' imgOrder='first' />



    </Layout>
  )
}


export async function getStaticProps(context: any) {
  let c = context;
  console.log(c)
  const whyspoton = await getDataFromSheets("whyspoton");
  const services = await getDataFromSheets("services");
  return {
    props: {
      //data: sheet.slice(1, sheet.length), // remove sheet header
      whyspoton: whyspoton.slice(1, whyspoton.length), // remove sheet header
      services: services.slice(1, services.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}