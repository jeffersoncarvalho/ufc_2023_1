import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HelloWorld from '@/components/HelloWorld'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HelloWorld />
        <h1>Teste</h1>
      </main>
      
    </>
  )
}
