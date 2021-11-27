import './App.css';
import Timer from "./component/timer/Timer";
import Game from "./component/game/game";
import Game2 from './component/game/Game2';
import Clicker from './component/clicker/Clicker';
function App() {
  return (
    <div className="App">
      <Game score="5"/>
      <Game2 score="5"/>
      <Clicker/>
    </div>
  );
}

export default App;
