import Head from 'next/head';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nat Tats</title>
        <meta name="description" content="Natalia Rezende Tattoo Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <Nav />
      </main>
    </>
  );
}
