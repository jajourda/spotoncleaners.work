import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>SpotOn Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-yellow">
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

      <footer className="flex h-24 w-full items-center justify-center border-t bg-blue">
        <a
          className="flex items-center justify-center text-white"
          href="mailto: info@spotoncleaners.work"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us: info@spotoncleaners.work

        </a>
      </footer>
    </div>
  )
}
