import "./CreateBoss.scss";
import BossForm from "../../components/BossForm/BossForm";

const CreateBoss = () => {

    const handleSubmit = async boss => {
        let response = await fetch("http://localhost:8080/boss",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'        
            },
            body:JSON.stringify(boss)
        
        });
        if (response.ok) {
            alert("Boss added");
          } else {
            const message = await response.text();
            alert(message);
          }
    };
    const defaultFormState = { bossName: "", bossHealth: null, bossSouls: null, bossImage: "",bossMusic:"",bossDesc:"",gameAppearance:null };

    return(
        <>
        <h2 className="section-title">Create Boss</h2>
        <BossForm handleSubmit={handleSubmit} defaultFormState={defaultFormState}/>
        </>
    )
}

export default CreateBoss;