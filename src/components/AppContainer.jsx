import React from 'react'

function AppContainer(props) {
  return (
   <div className="App container-md my-4 pb-3 border rounded bg-light">
     {props.children}
  </div>
  )
}

export default AppContainer
