import { getSession } from "next-auth/react"
import Head from "next/head"
import Feed from "../components/Feed.js"
import Header from "../components/Header.js"
import Slides from "../components/Slides.js"

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Slides />
        <Feed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return {
    props: {
      products,
      session,
    },
  }
}
