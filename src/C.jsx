import React, { useReducer } from 'react'
function reducer(state, action){

    switch (action.type) {
        case "inc": return { count: state.count+1    }
        case "desc": return { count: state.count-1    }
    }
   
}
function C() {
    let [state, dispatch]=useReducer(reducer, {count: 10})
  return (
    <div>
      <h2>useReducer {state.count} </h2>
      <button onClick={()=>{dispatch({type : 'inc'})}}>++</button>
      <button onClick={()=>{dispatch({type : 'desc'})}}>+--</button>
    </div>
  )
}

export default C
