import { Round } from "./Round";
import Score from "./Score";
import TotalScore from './TotalScore';

const MapWrapper = ({ children, round, totalScore, newRoundScore}) => {
    return (
        <div className="p-6 duration-500 border-2 border-gray-500 rounded shadow-x1 h-120 w-120">
            <Score roundScore={ newRoundScore } />
            <TotalScore totalScore={ totalScore } />
            <Round round={ round } />
            { children }
        </div>
    )
}

export default MapWrapper;