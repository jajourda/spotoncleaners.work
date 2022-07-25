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

      <TitledCtaSection
        icon={[<svg className='inline -mt-3 mr-3 h-8 lg:h-10 fill-yellow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}<path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>]}
        heading='one sec...'
        line1='Call us today!'
        line2="We'll get it done."
        linkHref='tel: 843-408-6280'
        linkText='843-408-6280'
        imgSrc='/images/80phoneyellow.jpg'
        imgAlt='kudos for the image' />


      <JumboSectionHeadingImg line1='We want' line2='you' />
      <FeatureSection features={[
        { title: props.whyspoton[0].short, description: props.whyspoton[0].reason },
        { title: props.whyspoton[1].short, description: props.whyspoton[1].reason },
        { title: props.whyspoton[2].short, description: props.whyspoton[2].reason },
        { title: props.whyspoton[3].short, description: props.whyspoton[3].reason }
      ]} bg='richBlue' title='get fresh' subTitle="You should work with us" imgSrc="/images/why.jpg" imgHeading='Pick SpotOn Today' imgText='SpotOn Cleaners is not your average cleaning company: we have highly reliable cleaning systems, organized team methods, and efficient controls in place to guarantee customized results. We are a local, family-run business that desires to partner and build relationships with our clients' imgOrder='last' />

      <JumboSectionHeadingImg line1='Schedule' line2='a clean' />
      <TitledCtaSection
        heading='on time'
        line1='Fill out our form!'
        line2="We'll line it up."
        linkHref='/request-clean'
        linkText='Schedule now'
        imgSrc='/images/80phoneyellow.jpg'
        imgAlt='kudos for the image'
        icon={[<svg className='inline -mt-3 mr-3 h-8 lg:h-10 fill-yellow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z" /></svg>]}
      />

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