import './App.css';
import About from './components/About';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
