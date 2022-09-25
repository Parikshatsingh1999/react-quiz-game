import React , { useEffect ,useState ,useContext }  from  'react';

import { GameContext } from '../Game';



function Timer({stop,gameOver}) {

    const [time,setTime] = useState(10);
    const [reset,setReset] = useState(stop);

    const GameContent = useContext(GameContext);
    console.log('timer');

    useEffect(()=>{

        let interval = setInterval(()=>{

          setTime(prev=>{
                let update = prev-1;
                if(!update){
                    setReset(true);
                    clearInterval(interval);
                    setTimeout(()=>{

                        GameContent.gameOver();

                    },0)
                                        
                }
                return update
             }
            );

        },1000)

        return (()=>{
            clearInterval(interval);
        })

    },[])

  return (
    <div className='timer-main'>

<div className='timer-inner'>

<label>  {time} </label>

</div>

    </div>
  )
}

export default Timer