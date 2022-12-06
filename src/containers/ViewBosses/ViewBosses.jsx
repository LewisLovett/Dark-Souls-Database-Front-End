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

    useEffect(() =>{
        getBosses();
    },[])

    return(
        <>
        <BossList bosses={bosses}/>
        </>
    )
}
export default ViewBosses;