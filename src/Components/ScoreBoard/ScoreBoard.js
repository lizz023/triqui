import './ScoreBoard.css';

const ScoreBoard = ({resultX, resultO}) =>(
    <div className="result-board">
        <div>{resultX}</div>
        <div>{resultO}</div>
    </div>
)

export default ScoreBoard;
