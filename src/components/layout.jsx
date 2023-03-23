import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="sjortcut icon" href="/img/favicon.ico" />
        <title>PokeNext</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500;600;700&display=swap" rel="stylesheet"></link>

      </Head>
      <Navbar />

      <main className="main-container">
        {children}
      </main>

      <Footer />
    </>
  )

};


export default Layout;