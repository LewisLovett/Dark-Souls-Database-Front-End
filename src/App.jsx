import logo from './logo.svg';
import './App.css';
import ViewBosses from "./containers/ViewBosses/ViewBosses";
import CreateBoss from "./containers/CreateBoss/CreateBoss";

const App = () => {

 return (
    <div className="App">
        <h1>Dark Souls</h1>
        <CreateBoss/>
        <ViewBosses/>
    </div>
  );
}

export default App;
