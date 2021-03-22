import React,{useReducer} from 'react';

type Actions =  { type: "add", text:string } | { type: "remove", idx: number }

interface ToDo{
  text:string;
  complete: boolean;
}
type State = ToDo[];

const ToDoReducer = (state:State, action: Actions)=>{
  switch(action.type){
    case "add":
      return [...state,{text: action.text, complete: false }];
    case "remove":
      return state.filter((_,i)=>action.idx);
    default:
      return state;
  }
}

const ReducerExample: React.FC = ()=>{
  const [todos,dispatch] = useReducer(ToDoReducer,[]);
  return(
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={()=>{
          dispatch({type:"add", text:"..."})
        }}
      >
        +
      </button>
    </div>
  )
}
export default ReducerExample;