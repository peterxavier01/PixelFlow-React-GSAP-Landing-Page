import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Story from "./components/story";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
