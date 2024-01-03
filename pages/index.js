import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SSC Learning Test Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to SafetySuite's Learning Repository. Please click on a Course below to retrieve its SCORM package." />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <p className="text"
  Link 1: upload
      </main>

      <Footer />
    </div>
  )
}
