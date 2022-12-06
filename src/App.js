import logo from './logo.svg';
import './App.css';
import Boss from './components/Boss/Boss';

function App() {
  const boss = {bossName:"Tim", bossHealth:"20", bossSouls:"30", bossImage:"sif.png", bossDesc:"dnjdfj" };
  return (
    <div className="App">
        <h1>Dark Souls</h1>
        <Boss boss={boss}/>
    </div>
  );
}

export default App;
