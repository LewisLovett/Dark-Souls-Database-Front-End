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
            <form className="boss-form" onSubmit={handleValidation} id="bossForm">
              <input className="boss-form__input" type="text" placeholder="Boss name" value={boss.bossName}
                onInput={event=>setBoss({...boss,bossName:event.target.value})}  />
              <input className="boss-form__input" type="number" placeholder="Boss health" value={boss.bossHealth}
                onInput={event=>setBoss({...boss,bossHealth:parseInt(event.target.value) })}  />
              <input className="boss-form__input" type="number" placeholder="Boss souls" value={boss.bossSouls}
                onInput={event=>setBoss({...boss,bossSouls:parseInt(event.target.value) })}  />
              <input className="boss-form__input" type="number" placeholder="Game Appearance" value={boss.gameAppearance}
                onInput={event=>setBoss({...boss,gameAppearance:parseInt(event.target.value) })}  />
              <input className="boss-form__input" type="text" placeholder="Boss Image" value={boss.bossImage}
                onInput={event=>setBoss({...boss,bossImage:event.target.value})}  />
              <textarea form="bossForm" className="boss-form__input boss-form__input--text-area"placeholder="Boss description" value={boss.bossDesc}
                onInput={event=>setBoss({...boss,bossDesc:event.target.value})}></textarea>
              <button className="boss-form__submit" type="submit">Submit</button>
            </form>
    )
}
export default BossForm;