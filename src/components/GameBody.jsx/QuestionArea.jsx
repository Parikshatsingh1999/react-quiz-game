import React , {useState , useEffect , useContext} from 'react';
import Question from './Question.jsx';
import { GameContext } from '../Game';
import QuestionsData from './QuestionsData.js';
import Timer from './Timer.jsx';


function QuestionArea({number}) {

    const [questionnumber,setQuestionnumber] = useState(0);
console.log('question area');

    useEffect(()=>{
        console.log("area" , number);
setQuestionnumber(number);
    },[number])

    const GameContent = useContext(GameContext);

    const answered = (status)=>{
        if(status) GameContent.answerProvided();
        else GameContent.gameOver();
    }
console.log(questionnumber,'number',QuestionsData[questionnumber]);
  return (
    <div className='questions-main'>

<div className='questions-inner'>
<div className='timerSpace'>
{/* <Timer stop={false}/> */}
</div>
<div className='questionspace'>
{questionnumber?<Question setAnswer={answered} presentQuestion={QuestionsData[questionnumber-1]}/>:""}
</div>
</div>

    </div>
  )
}

export default QuestionArea