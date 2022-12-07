import "./ViewBosses.scss";
import BossList from "../../components/BossList/BossList";
import { useEffect, useState } from "react";

const ViewBosses = () =>{
    const [bosses,setBosses] = useState([]);

    const getBosses = async () => {
        const response = await fetch("http://localhost:8080/bosses");
        const bossData = await response.json();
        setBosses(bossData);
    }

    const filterBosses = async ( event) =>{
        const inputValue = event.target.value.toLowerCase();
        if(inputValue  !==""){
            let filteredBosses = bosses;
            filteredBosses = filteredBosses.filter(boss => { return (boss.bossName.toLowerCase().includes(inputValue))})
            setBosses(filteredBosses);
        }else{
            getBosses();
        }
        
    }
    const getBossesByGameAppearance = async (event) => {
        const radioSelected = event.target.value;
        if(radioSelected==="all"){
            getBosses();
        }else{
            const response = await fetch(`http://localhost:8080/bosses?gameAppearance=${radioSelected}`);
            const bossData = await response.json();
            setBosses(bossData);
        }
        
    }

    useEffect(() =>{
        getBosses();
    },[])

    return(
        <>
        <div className="filter-container" >
            <p className="filter-container__label">Filter by name:</p>
            <input className="filter-container__input" type="text" onInput={filterBosses}/>
        </div>
            <input type="radio" id="all" name="game_appearance" value="all" onChange={getBossesByGameAppearance}/>
          <label for="all">All</label>
          <input type="radio" id="DS1" name="game_appearance" value="1"onChange={getBossesByGameAppearance}/>
          <label for="DS1">Dark Souls 1</label>
          <input type="radio" id="DS2" name="game_appearance" value="2"onChange={getBossesByGameAppearance}/>
          <label for="DS2">Dark Souls 2</label>
          <input type="radio" id="DS3" name="game_appearance" value="3"onChange={getBossesByGameAppearance}/>
          <label for="DS3">Dark Souls 3</label>
        <BossList bosses={bosses}/>
        </>
    )
}
export default ViewBosses;