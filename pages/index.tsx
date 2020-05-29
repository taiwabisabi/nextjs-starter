import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getElements, getElement } from '@api/elements'

export default function Home({elements}) {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>Blank Nextjs Template</h1>
      </main>
    </div>
  )
}
