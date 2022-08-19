import TotalScore from "./TotalScore";

export const Results = ({ totalScore }) => {
    return (
        <div>
            <div className='congrats'>Congrats</div>
            <TotalScore totalScore={ totalScore } />
        </div>
    );
};