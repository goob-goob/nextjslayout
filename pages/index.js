import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
let socket;

import useSocketInitializer from '@/hooks/useSocketInitializer'

import ViewableArea from '../components/viewableArea'
import EarBear from '@/components/EarBear'



export default function Home() {

  useEffect(() => { socket = useSocketInitializer(socket) }, [])

  

  return (
    <>
      <div className='overflow-hidden'>
        <ViewableArea>
          <div className='w-20 h-20 bg-white'>
            <h1 className='bg-cyan-500 text-white text-lg'>wat</h1>
            <div><h1>hi</h1></div>
          </div>
          <EarBear></EarBear>
        </ViewableArea>
        <div>
          <h1>hi</h1>
        </div>
      </div>
    </>
  )
}

// export default function Home() {
//   return (
//     <h1 className="text-3xl font-bold underline text-cyan-500 bg-white">
//       Hello world!12
//     </h1>
//   )
// }