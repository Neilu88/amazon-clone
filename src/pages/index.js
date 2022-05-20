import Head from "next/head"
import Header from "../components/Header.js"
import Slides from "../components/Slides.js"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Slides />
        {/* <Feed /> */}
      </main>
    </div>
  )
}
