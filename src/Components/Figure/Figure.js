import './Figure.css';
import classNames from 'classnames';


const Figure = ({value, onClick, turn, winner}) => {

    // si el cuadrado no ha sido clikeado o a tiene cruz o circulo se le va a dar el valor de null. sino se ejecuta la funcion de onClick
    const handleClick = () => {
        (turn !== null && value === null) && onClick();
    }

    let figureClass = classNames({
        figures: true,
        [`figures--${value}`]: value !== null,
        winner: winner,
        
    });

    return(
        <div className="figures-container">
            <div className={figureClass} onClick={() => handleClick()}></div>
        </div>
        
    )
    
}
export default Figure;