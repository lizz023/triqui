import React,{useState} from 'react'
import './App.css';
import Board from './Components/Board/Board';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

const App = () => {

  // State para el turno del jugador
  const [turn, setTurn] = useState('X');
  const [figures, setFigures] = useState(Array(9).fill(null));
  const [winningFigures, setWinningFigures] = useState([]);
  const [result, setResult] = useState({
    X:0,
    O:0,
  });

  const reset = () =>{
    setTurn('X');
    setFigures(Array(9).fill(null));
    setWinningFigures([]);
  }
  //Verificar la partida (Combinaciones ganadoras)
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //Si el valor [a] es distinto de null y el valor [a] = [b] y si el valor [a] = [c] entonces hay un ganador 
  
  //Ganador
  const checkForWinner = newFigures =>{
    for(let i = 0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i];
      if(newFigures[a] && newFigures[a] === newFigures[b] && newFigures[a]=== newFigures[c]){
        endGame(newFigures[a], winningPositions[i]);
        //Hay un ganador 
      return
      }
    }
    //Si en newFigures no hay ningun cuadrado que sea null (Todos ya tienen valor)
    //Empate
    if(!newFigures.includes(null)){
      endGame(null, Array.from(Array(10).keys()));
      return 
    }
    
    setTurn(turn === 'X' ? 'O' : 'X');
  }

 // handle  Cada vez que el usuario de click en uno de los cuadrados ya se pueda modificar.
 // Se creo una nueva variable que va a ser la copia de las figures, se va a modificar y se le va a asignar a las figures 
  const handleClick = figure =>{
    let newFigures = [...figures];
    newFigures.splice(figure, 1, turn);
    setFigures(newFigures);
    checkForWinner(newFigures);
  }

  //Final de la partida
  const endGame = (marcador, winningPositions) =>{
    setTurn(null);
    if(marcador !== null){
      setResult({
        ...result,
        [marcador]: result[marcador] +1,
      })
    }
    setWinningFigures(winningPositions);
    setTimeout(reset, 4000);
    
    
  }
 
  return (
    <div className="container">
      <h1 className="title">Bienvenidos al juego de triqui lizz</h1>
      <p className="description"> Cada jugador elige si juega con 'X' o con 'O' y en su turno debe poner una, intentando conseguir 3 seguidas en una línea vertical, horizontal o diagonal. Una vez se llenan todos los espacios se termina la partida</p>
      <Board winningFigures={winningFigures} turn={turn} figures={figures} onClick={handleClick}/>
      <ScoreBoard resultO={result.O} resultX={result.X}/>
    </div>
  );
}

export default App;