import { useState } from "react";
import "./BossForm.scss";

const BossForm = ({handleSubmit,defaultFormState}) => {
    const [boss,setBoss] = useState(defaultFormState);

    const handleValidation = event => {
        event.preventDefault();
    
        if (Object.values(boss).some(value => !value)) {
          alert("Please fill out all the fields");
          return;
        }
    
        handleSubmit(boss);
      };

    return(
        <div className="form">
            <h3>Form</h3>
            <form onSubmit={handleValidation}>
            <input type="text" placeholder="Boss name" value={boss.bossName}
              onInput={event=>setBoss({...boss,bossName:event.target.value})}  />
            <input type="number" placeholder="Boss health" value={boss.bossHealth}
              onInput={event=>setBoss({...boss,bossHealth:parseInt(event.target.value) })}  />
            <input type="number" placeholder="Boss souls" value={boss.bossSouls}
              onInput={event=>setBoss({...boss,bossSouls:parseInt(event.target.value) })}  />
            <input type="text" placeholder="Boss Image" value={boss.bossImage}
              onInput={event=>setBoss({...boss,bossImage:event.target.value})}  />
            <input type="text" placeholder="Boss description" value={boss.bossDesc}
              onInput={event=>setBoss({...boss,bossDesc:event.target.value})}  />
              <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
export default BossForm;