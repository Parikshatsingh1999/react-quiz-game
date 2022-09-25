import React from 'react'
import { useState } from 'react'

import MoneyLadderData from './MoneyLadderData.js';


function EndGame({questionNumber , reStart}) {
    console.log('end game');
    const [moneyWon , setMoneyWon] = useState("Rs 0");

    useState(()=>{

    if(questionNumber!=1){
        let item = MoneyLadderData.find(item=>item.id == questionNumber-1);

        setMoneyWon(item.ammount);
    }


    },[])

  return (
    <div className='endgame'>

<h3>
    Game Over
</h3>

<h5> <span> You Won </span> {moneyWon} </h5>

<label className='restartbtn' onClick={reStart}> Restart Game </label>

    </div>
  )
}

export default EndGame