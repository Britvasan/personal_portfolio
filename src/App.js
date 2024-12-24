import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
