import React from 'react'

function MoneyLadder({MoneyLadder=[] , questionNumber = 1}) {

  return (
    <div className='ladder-main'>

<div className='inner'>

{
    MoneyLadder.map(item=>(
        <div className={questionNumber == item.id?"active ladder-item":"ladder-item" }  key={item.id}>
            <div className='inner'>
                <label> {item.id}</label>
               
                <h3> {item.ammount} </h3> 
                </div>
            </div>
    ))
}

</div>

    </div>
  )
}

export default MoneyLadder