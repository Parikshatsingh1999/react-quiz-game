import React , { useEffect ,useState ,useContext }  from  'react';

import { GameContext } from '../Game';



function Timer({stop,questionNumber}) {

   
    const [time,setTime] = useState(30);
   
    

    const GameContent = useContext(GameContext);

    useEffect(()=>{
    setTime(30);
    },[questionNumber])

   

    useEffect(()=>{

       let interval = setInterval(()=>{

          setTime(prev=>{
                let update = prev-1;
                if(!update){
                    
                    clearInterval(interval);
                    setTimeout(()=>{

                        GameContent.gameOver();

                    },0)
                                        
                }
                return update
             }
            );

        },1000)

    
        if(stop) clearInterval(interval);
        return (()=>{
            clearInterval(interval);
        })

    },[stop])

  return (
    <div className='timer-main'>

<div className='timer-inner'>

<label>  {time} </label>

</div>

    </div>
  )
}

export default Timer