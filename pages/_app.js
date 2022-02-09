import {SessionProvider} from 'next-auth/react';
import 'tailwindcss/tailwind.css';
import {RecoilRoot} from "recoil";

export default function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}