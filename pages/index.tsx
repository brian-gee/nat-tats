import Head from 'next/head';
import Nav from '@/components/nav';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nat Tats</title>
        <meta name="description" content="Natalia Rezende Tattoo Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2 max-w-6xl flex flex-col justify-between m-auto">
        <Nav />
        <Hero />
      </main>
    </>
  );
}
