import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Message from './Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <Message/>

      </header>
    </div>
  )
}

export default App
