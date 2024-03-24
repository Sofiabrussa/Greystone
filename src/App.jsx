import Enterprise from "./components/Enterprise/Enterprise";
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
      </Layout>
    </>
  )
}

export default App
