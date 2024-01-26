import React, { useContext } from 'react'
import { UserContext } from './A';
function B() {
    const user = useContext(UserContext);
  return (
    <div>
      <h2>B {user}</h2>
    </div>
  )
}

export default B
