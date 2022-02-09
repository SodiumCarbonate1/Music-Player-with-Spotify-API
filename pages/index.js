import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import styles from '../styles/Home.module.css';
import Player from '../components/Player';
import {useSession, signIn, signOut} from 'next-auth/react';
import { get } from 'lodash';

export default function Home() {
  return(
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar/>
        <Center/>
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}



// export async function getServerSideProps(context){
//   const session = await getSession(context);
//   return{
//     props:{
//       session,
//     }
//   }
// }