import React ,{useState,useEffect} from 'react';


function Question({presentQuestion,setAnswer,stopTimer}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer , setSelectedAnswer] = useState(null);
    const [customClass , setCustomClass] = useState(null);


    useEffect(()=>{
        if(!presentQuestion) setAnswer(false);
setQuestion(presentQuestion);
setSelectedAnswer(null);

   },[presentQuestion])

   const handleClick = (answer)=>{

    stopTimer();

    setSelectedAnswer(answer);

    if(answer.correct){ 
        setTimeout(()=>{

            setAnswer(true);
        },4000)
        setCustomClass("correct");
    }
    else{  setTimeout(()=>{

        setAnswer(false);
    },4000);setCustomClass("wrong");
}

   
   }

  return (
    
    <div className='question'>
{
    question ? 
    <>
<h5> {question.question} </h5>
<div className='answers'>
   { question.answers.map((item,index)=>(
<div className={'answer-item ' + (selectedAnswer?item.correct?"was-correct ":"":"") + (selectedAnswer?"answered ":"") + (selectedAnswer== item ? customClass:"") } key={index} onClick={(e)=>handleClick(item)}>
    <label> {item.answer} </label>
    </div>
    ))
   }
</div>
    </>
    :""
}
    </div>
    
  )
}

export default Question