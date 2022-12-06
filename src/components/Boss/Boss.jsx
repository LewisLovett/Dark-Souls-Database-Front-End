import "./Boss.scss";

const Boss = ({boss}) => {
    const {bossName, bossHealth,bossSouls,bossImage,bossDesc} = boss;

    return(
        <div className="boss">
            <h2 className="boss__name">{bossName}</h2>
            <img className="boss__image" alt={bossName} src={require(`../../assets/images/boss_images/${bossImage}`)}/>
            <div className="boss__healthAndSouls">
            <div className="boss__text">Boss Health: {bossHealth}</div>
            <div className="boss__text">Boss Souls: {bossSouls}</div>
            </div>
            <p className="boss__text">{bossDesc}</p>
        </div>
    );
};

export default Boss;