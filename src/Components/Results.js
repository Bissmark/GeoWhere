import TotalScore from "./TotalScore";

export const Results = ({ totalScore }) => {
    return (
        <div>
            <div className='text-yellow-500'>Congrats</div>
            <TotalScore className="finalScore" totalScore={ totalScore } />
        </div>
    );
};