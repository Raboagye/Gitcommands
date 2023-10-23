import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [statee, setStatee] = useState("")

  useEffect(() => {
    axios.get("https://api.github.com/users/hacktivist123").then((response) => {
      setStatee(response.data);
    });
  }, []);
  

  return (
    <>   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn a lot for your own personal development
        <div>{JSON.stringify(statee, null, 2)}</div>
      </p>
    </>
  )
}

export default App
