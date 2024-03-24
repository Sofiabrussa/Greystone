import CorporateSection from "./components/CorporateSection/CorporateSection";
import Enterprise from "./components/Enterprise/Enterprise";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <Layout>
        <Hero/>
        <Enterprise/>
        <CorporateSection/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
