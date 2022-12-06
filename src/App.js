import logo from './logo.svg';
import './App.css';
import Boss from './components/Boss/Boss';
import BossList from './components/BossList/BossList';
import ViewBosses from "./containers/ViewBosses/ViewBosses"

function App() {


// let boss1 = {bossName:"Tim", bossHealth:"20", bossSouls:"30", bossImage:"sif.png", bossDesc:"dnjdfj" };
// let boss2 ={bossName:"Bim", bossHealth:"20", bossSouls:"30", bossImage:"pinwheel.png", bossDesc:"dnjdfj" };
// let bosses = [boss1,boss2];
  
 return (
    <div className="App">
        <h1>Dark Souls</h1>
        <ViewBosses/>
    </div>
  );
}

export default App;
