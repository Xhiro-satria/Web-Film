import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import "./style/landingpage.css";
import BattleGround from './components/BattleGround';
import Romance from './components/Romance';
import Anime from './components/Anime';
//import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/*intro*/}
      <div className='myBG'>
        <Navigationbar />
        <Intro />
      </div>
      {/*end-intro*/}

      <div className='trending'>
        <Trending />
      </div>
      <div className='battleground'>
        <BattleGround />
      </div>
      <div className='Superhero'>
        <Superhero />
      </div>
      <div className='romance'>
        <Romance />
      </div>
      <div className='anime'>
        <Anime />
      </div>
    </div>
  );
}

export default App;
