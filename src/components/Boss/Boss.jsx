import "./Boss.scss";
import {Link} from "react-router-dom"

const Boss = ({boss}) => {
    const {id, bossName, bossHealth,bossSouls,bossImage,bossDesc, gameAppearance} = boss;
    let displayImage = bossImage;
    if(bossImage!=='sif.png'&& bossImage!=='pinwheel.png'&&bossImage!=='iron_golem.png'&&bossImage!=='abyss_watchers.png'&&bossImage!=='royal_rat_authority.png'){
        displayImage = 'placeholder.png';
    }

    return(
        <div className="boss">
            <h2 className="boss__name">{bossName}</h2>
            <img className="boss__image" alt={bossName} src={require(`../../assets/images/boss_images/${displayImage}`)}/>
            <div className="boss__healthAndSouls">
            <div className="boss__text">Boss Health: {bossHealth}</div>
            <div className="boss__text">Boss Souls: {bossSouls}</div>
            </div>
            <div className="boss__text">Appears in Dark Souls {gameAppearance}</div>
            <p className="boss__text">{bossDesc}</p>
            <Link className="boss__edit" key={id} to={`/boss/edit/${id}`}>Edit</Link>
        </div>
    );
};

export default Boss;