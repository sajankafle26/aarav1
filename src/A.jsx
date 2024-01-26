import React, { createContext } from 'react'
import B from './B'
export const UserContext = createContext()
function A() {
  return (
    <div>
      <UserContext.Provider value="sajan">
        <h2>A</h2>
        <B/>
      </UserContext.Provider>
    </div>
  )
}

export default A
