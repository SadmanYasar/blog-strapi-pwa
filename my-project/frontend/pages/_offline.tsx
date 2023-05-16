import Head from "next/head"

const Fallback = () => (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1 className="bg-red-500 animate-bounce">You are offline</h1>
    <p className="bg-blue-500">pls work</p>
  </>
)

export default Fallback
