import React, { useReducer   } from "react";


const App =()=>{

  const reducer=(state, action)=>{
    switch(action.type){
      case "increament":
        return {count: state.count+1}
      case "decreament":
        return {count: state.count-1}
      default:
         return state;  

    }
  }
  const [state, dispatch]= useReducer(reducer, {count:0})
  return(
    <>
    <h2>Counter</h2>
    <p>Count:{state.count}</p>
    <button onClick={()=>dispatch({type: "increament"})} style={{margin: "5px"}}>Increament</button>
    <button onClick={()=> dispatch({type: "decreament"})} style={{margin: "5px"}}>Decreament</button>
    </>
  )
}

export default App;
