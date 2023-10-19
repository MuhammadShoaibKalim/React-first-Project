import React, { useState } from "react";

const TodoList=()=>
{
  const [num, setNum ]=useState(5);


  const increment=()=>
  {
    setNum(num+1) 
  }

  const decrement=()=>
  {
    if(num>0)
    {
        setNum(num-1) 
    }
    else
    {
        alert("Why are you trying for more?");
        setNum(0) 
    }
    
  }
    return(
       <>
       <div className='main_div'>
          <div className='center_div'>
              <h1 ona> {num} </h1>
            <div className='btn_div'> 
             <button onClick={increment}>Increment</button>
             <button onClick={decrement}>Decrement</button>
          </div>
       </div>
    </div>

       </>

    );
}


export default TodoList;