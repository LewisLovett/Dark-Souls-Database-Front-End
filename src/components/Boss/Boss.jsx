import "./Boss.scss";
import {Link} from "react-router-dom"

const Boss = ({boss}) => {
    const {id, bossName, bossHealth,bossSouls,bossImage,bossMusic,bossDesc, gameAppearance} = boss;
    let displayImage = bossImage;
    if(bossImage!=='sif.png'&& bossImage!=='pinwheel.png'&&bossImage!=='iron_golem.png'&&bossImage!=='abyss_watchers.png'&&bossImage!=='royal_rat_authority.png'){
        displayImage = 'placeholder.png';
    }
    let displayMusic = bossMusic;
    if(bossMusic!=='sif.mp3'&& bossMusic!=='pinwheel.mp3'&&bossMusic!=='iron_golem.mp3'&&bossMusic!=='abyss_watchers.mp3'&&bossMusic!=='royal_rat_authority.mp3'){
        displayMusic = 'firelink_shrine.mp3';
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
            <div className="boss__text--audio">Boss Theme</div>
            <audio className="boss__audio" controls loop>
                <source src={require(`../../assets/music/boss_themes/${displayMusic}`)} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <Link className="boss__edit" key={id} to={`/boss/edit/${id}`}>Edit</Link>
        </div>
    );
};

export default Boss;