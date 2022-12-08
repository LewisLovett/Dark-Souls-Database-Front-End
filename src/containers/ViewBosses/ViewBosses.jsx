import "./ViewBosses.scss";
import BossList from "../../components/BossList/BossList";
import { useEffect, useState } from "react";

const ViewBosses = () =>{
    const [bosses,setBosses] = useState([]);
    const [hasBeenSorted,setHasBeenSorted] = useState(false);


    const getBosses = async () => {
        const response = await fetch("http://localhost:8080/bosses");
        const bossData = await response.json();
        setBosses(bossData);
    }

    const filterBosses = ( event) =>{
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

    const sortBosses = (event) =>{
        let tempBosses = JSON.parse(JSON.stringify(bosses));
        const sortType = event.target.value;
        if(sortType==="name"){
            tempBosses = tempBosses.sort((a, b) =>  a.bossName.localeCompare(b.bossName))
        }else if(sortType==="health"){
            tempBosses = tempBosses.sort((a,b)=> a.bossHealth-b.bossHealth)
        }else if(sortType==="souls"){
            tempBosses = tempBosses.sort((a,b)=> a.bossSouls-b.bossSouls);
        }
        if(hasBeenSorted){
            tempBosses.reverse();
        }
        setBosses(tempBosses);
        setHasBeenSorted(!hasBeenSorted);
    }

    return(
        <>
        <div className="filter-container" >
            <p className="filter-container__label">Filter by name:</p>
            <input className="filter-container__input" type="text" onInput={filterBosses}/>
        </div>
        <div className="radio-container">
            <input className="radio-container__radio" type="radio" id="all" name="game_appearance" value="all" onChange={getBossesByGameAppearance}/>
            <label className="radio-container__label" for="all">All</label>
            <input className="radio-container__radio" type="radio" id="DS1" name="game_appearance" value="1"onChange={getBossesByGameAppearance}/>
            <label className="radio-container__label" for="DS1">Dark Souls 1</label>
            <input className="radio-container__radio" type="radio" id="DS2" name="game_appearance" value="2"onChange={getBossesByGameAppearance}/>
            <label className="radio-container__label" for="DS2">Dark Souls 2</label>
            <input className="radio-container__radio" type="radio" id="DS3" name="game_appearance" value="3"onChange={getBossesByGameAppearance}/>
            <label className="radio-container__label" for="DS3">Dark Souls 3</label>
        </div>
        <div className="button-container">
            <button className="button-container__button" onClick={sortBosses} value="name">Sort By Name</button>
            <button className="button-container__button" onClick={sortBosses}value="health">Sort By Health</button>
            <button className="button-container__button" onClick={sortBosses}value="souls">Sort By Souls</button>
        </div>
        <BossList bosses={bosses}/>
        </>
    )
}
export default ViewBosses;