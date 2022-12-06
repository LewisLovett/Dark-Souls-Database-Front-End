import "./BossList.scss";
import Boss from "../Boss/Boss";

const BossList = ({bosses}) => {
    console.log(bosses);
    return(
        <div className="boss-list">
            {bosses.map(boss => (<Boss boss={boss} />)
            )}
        </div>
    )
}
export default BossList;