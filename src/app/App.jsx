import './App.css';

import About from './components/About';
import Academic from './components/Academic';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

export default props => (
  <div className="backgroundApp">

    <Header></Header>

    <div className="home">
      <div className="title">
        <h1>Hi!</h1>
        <h2>I'm a Software Developer</h2>
      </div>

      <div className="ilustration">
        <img src="./assets/ilustration2.svg"></img>
      </div>

      <div className="title">
        <h3>You can call me Becks Gaia</h3>
      </div>
    </div>

    <div className="about">
      <About></About>
    </div>

    <div className="academic">
      <Academic></Academic>
    </div>

    <Experiences></Experiences>

    <Projects></Projects>

  </div>
)
