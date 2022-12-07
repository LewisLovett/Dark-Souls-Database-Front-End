import "./BossList.scss";
import Boss from "../Boss/Boss";

const BossList = ({bosses}) => {
    return(
        <div className="boss-list">
            {bosses.map(boss => (<Boss boss={boss} />)
            )}
        </div>
    )
}
export default BossList;