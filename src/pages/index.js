import Head from "next/head"
import Header from "../components/Header.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Header />
      {/* <Slides /> */}
      {/* <Feed /> */}
    </div>
  )
}
