import "./Boss.scss";

const Boss = ({boss}) => {
    const {bossName, bossHealth,bossSouls,bossImage,bossDesc} = boss;

    return(
        <div className="boss">
            <h3 className="boss__name">{bossName}</h3>
            <img className="boss__image" src={`../../assets/images/boss_images/${bossImage}`}/>
            <p>Boss Health: ${bossHealth}</p>
            <p>Boss Souls: ${bossSouls}</p>
            <p>${bossDesc}</p>
        </div>
    );
};

export default Boss;