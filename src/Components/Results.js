import TotalScore from "./TotalScore";

export const Results = ({ totalScore }) => {
    return (
        <div>
            <div>Congrats</div>
            <TotalScore totalScore={ totalScore } />
        </div>
    );
};