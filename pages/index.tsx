import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <figure>
          <img src="/logo.png" alt="" />
        </figure>
        <h1 className="text-6xl font-bold">
          Website coming{' '}
          <a className="text-blue" href="https://nextjs.org">
            soon!
          </a>
        </h1>





      </main>


    </Layout>
  )
}
