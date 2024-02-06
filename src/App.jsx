import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        <Partners />
        <Footer />

      </main>
    </div>
  );
};

export default App;
