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
            <input type="text" placeholder="Boss name"
              onInput={event=>setBoss({...boss,bossName:event.target.value})}  />
            <input type="text" placeholder="Boss health"
              onInput={event=>setBoss({...boss,bossHealth:parseInt(event.target.value) })}  />
            <input type="text" placeholder="Boss souls"
              onInput={event=>setBoss({...boss,bossSouls:parseInt(event.target.value) })}  />
            <input type="text" placeholder="Boss Image"
              onInput={event=>setBoss({...boss,bossImage:event.target.value})}  />
            <input type="text" placeholder="Boss description"
              onInput={event=>setBoss({...boss,bossDesc:event.target.value})}  />
              <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
export default BossForm;