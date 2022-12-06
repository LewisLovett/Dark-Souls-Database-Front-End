import "./CreateBoss.scss";
import BossForm from "../../components/BossForm/BossForm";

const CreateBoss = () => {

    const handleSubmit = async boss => {
        let response = await fetch("http://localhost:8080/boss",{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'        
            },
            body:JSON.stringify(boss)
        });
    };

    return(
        <>
        <h2>Create Boss</h2>
        <Form handleSubmit={handleSubmit}/>
        </>
    )
}