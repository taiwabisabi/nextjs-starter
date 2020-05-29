import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllElementsIds, getElement } from '@api/elements'

export default function Element(
  {
    element
  }: {
    element : {
      title: string
    }
  }
) {
  return (
    <div className="container">
      <Head>
        <title>{element.title}</title>
      </Head>
      <h1>{element.title}</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllElementsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const element = (await getElement(params.id)) || []
  return {
    props: { element },
    unstable_revalidate: 1,
  }
}