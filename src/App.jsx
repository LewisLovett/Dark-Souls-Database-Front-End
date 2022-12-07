import logo from './logo.svg';
import './App.scss';
import ViewBosses from "./containers/ViewBosses/ViewBosses";
import CreateBoss from "./containers/CreateBoss/CreateBoss";
import EditBoss from './containers/EditBoss/EditBoss';
import Landing from './containers/Landing/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

const App = () => {

 return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/bosses' element={<ViewBosses/>}/>
            <Route path='/boss/create' element={<CreateBoss/>}/>
            <Route path='/boss/edit/:id' element={<EditBoss/>}/>
        </Routes>
    </Router>
   
  );
}

export default App;
