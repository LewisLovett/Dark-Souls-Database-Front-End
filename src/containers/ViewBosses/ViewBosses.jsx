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

    useEffect(() =>{
        getBosses();
    },[])

    return(
        <>
        <input type="text" onInput={filterBosses}/>
        <BossList bosses={bosses}/>
        </>
    )
}
export default ViewBosses;