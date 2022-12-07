import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "./EditBoss.scss";
import Boss from "../../components/Boss/Boss";
import BossForm from "../../components/BossForm/BossForm";

const EditBoss = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [boss,setBoss] = useState(null);

    const getBossById = async id => {
        const response = await fetch(`http://localhost:8080/boss/${id}`);
        const bossData = await response.json();
        setBoss(bossData);
    }

    useEffect(() => {
        getBossById(id);
    },[id])

    const handleUpdate = async updatedBoss => {
        const response = await fetch(`http://localhost:8080/boss/${id}`,{
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
              },
              body:JSON.stringify(updatedBoss)
        });

        if(response.ok){
            alert("Boss updated");
            setBoss(updatedBoss);
        }else{
            const message = await response.text();
            alert(message);
        }
        
    }

   const handleDelete = async bossToBeDeleted => {
    const response = await fetch(`http://localhost:8080/boss/${id}`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(response.ok){
        alert("Boss deleted");
        navigate("/");
    }else {
        const message = await response.text();
        alert(message);
      }
   };
    if(!boss) return(<h1>Loading...</h1>);
    return(
        <section className="edit-section">
        <h2 className="edit-section__title">Edit Boss</h2>
        <BossForm defaultFormState={boss} handleSubmit={handleUpdate}/>
        <button className="edit-section__delete-btn" onClick={handleDelete}>Delete</button>
        </section>
    )
}
export default EditBoss;