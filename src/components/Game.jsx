import React , {useEffect ,useState} from 'react'

import MoneyLadder from './GameBody.jsx/MoneyLadder'
import QuestionArea from './GameBody.jsx/QuestionArea'
import "../components/Game.css";
import MoneyLadderData from './GameBody.jsx/MoneyLadderData.js';
import EndGame from './GameBody.jsx/EndGame';



export const GameContext = React.createContext();

export default function Game() {
    
   const [questionNumber , setQuestionNumber] = useState(0); 


   const [endGame,setEndGame] = useState(false);

   const gameOver =()=>{
    setEndGame(true);

   }

  
   useEffect(()=>{
   
setQuestionNumber(1);

return (()=>{
    setQuestionNumber(0);
})
   },[])

   const answerProvided = ()=>{
    
    setQuestionNumber(prev=>prev+1);
   }

   

  return (
    <div className='main-wrap'>
        
        <GameContext.Provider value={{gameOver,answerProvided}} >  
<div className='questionarea'>
{ endGame?
        <EndGame questionNumber={questionNumber}/>:
<QuestionArea number={questionNumber}/>
}
</div>
<div className='ladder'>
<MoneyLadder MoneyLadder={MoneyLadderData} questionNumber={questionNumber}/>
</div>
</GameContext.Provider>
        

    </div>
  )
}
