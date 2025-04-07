import Home from './pages/Home';
import { About } from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="relative">
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
