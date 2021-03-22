import React from 'react';
import './App.css';
import Counter  from './Counter';


const App:React.FC = ()=>{
  return(
    <div className="app">
      <Counter>
        {
          (count,setCount)=> (
            <div>
              <button onClick={()=>setCount(count - 1)}>-</button>
              {count}
              <button onClick={()=>setCount(count + 1)}>+</button>
            </div>
          )
        }
      </Counter>
    </div>
  )
}


export default App;
