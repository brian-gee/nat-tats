import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Work_Sans } from '@next/font/google';

const ws = Work_Sans({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ws.className}>
      <Component {...pageProps} />
    </div>
  );
}
