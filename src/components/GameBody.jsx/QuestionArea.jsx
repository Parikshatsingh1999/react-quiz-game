import React , {useState , useEffect , useContext} from 'react';
import Question from './Question.jsx';
import { GameContext } from '../Game';
import QuestionsData from './QuestionsData.js';
import Timer from './Timer.jsx';


function QuestionArea({number}) {

    const [questionnumber,setQuestionnumber] = useState(0);

    const [shutTimer,setShutTimer] = useState(false);

    useEffect(()=>{
    
setQuestionnumber(number);
setShutTimer(false);
    },[number])

    const GameContent = useContext(GameContext);

    const answered = (status)=>{
        if(status) GameContent.answerProvided();
        else GameContent.gameOver();
    }

const stopTimer = ()=>{
setShutTimer(true);
};

  return (
    <div className='questions-main'>

<div className='questions-inner'>
<div className='timerSpace'>
<Timer stop={shutTimer} questionNumber={questionnumber}/>
</div>
<div className='questionspace'>
{questionnumber?<Question stopTimer={stopTimer} setAnswer={answered} presentQuestion={QuestionsData[questionnumber-1]}/>:""}
</div>
</div>

    </div>
  )
}

export default QuestionArea