import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ListGroup from './components/ListGroup/index'
import Alert from './components/Alert'
function App() {
  const items = ['New York', 'Los Angle', 'HCM']
  return (
    <div className="App">
      <ListGroup heading='Miami' items = {items} />
      {/* <Alert>Hello <span>world</span></Alert> */}
    </div>
  )
}

export default App
