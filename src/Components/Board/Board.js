import Figure from "../Figure/Figure";
import './Board.css';


const Board = ({figures, onClick, turn, winningFigures}) => {

    const createFigures = values => (
        values.map( value => (
            <Figure
                winner={winningFigures.includes(value)}
                turn={turn}
                onClick={ () => onClick(value)}
                value={figures[value]}
                key={`figure_${value}`}
            />
        ))
    );

    return (
        
        <div className="board">
            
            <div className="row">
               {createFigures([0,1,2])}
            </div>
            <div className="row">
                {createFigures([3,4,5])}
            </div>
            <div className="row">
                {createFigures([6,7,8])}
            </div>
        </div>
    );
}

export default Board;