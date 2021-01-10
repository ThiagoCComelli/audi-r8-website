import '../styles/App.css';
import Hero from './Hero'
import Perfomance from './Perfomance'
import Specs from './Specs'
import Grid from './Grid'
import PerfomanceBottom from './PerformanceBottom'

function App() {
  return (
    <div className="App">
      <div className="AppContents">
        <Hero />
        <Perfomance />
        <Specs />
        <Grid />
        <PerfomanceBottom />
        <div className="author">
          <a href="https://www.linkedin.com/in/thiagoccomelli/"><h1>Made by Thiago Comelli</h1></a>
        </div>
      </div>
    </div>
  );
}

export default App;
