import React, {useState, useReducer} from 'react'
import axios from 'axios'
import axiosService from '../../network/axiosMethod';
import { getGreeting } from 'apis/fecthApi';

const initialState = {
  error: null,
  greeting: null,
}


export default function Fetch() {

  const [theme, setTheme] = useState("light");
  const [btnText, setBtnText] = useState('Load Greeting')
  const [greeting, setGreeting] = useState('')
  const [error, setError] = useState('')

  const [buttonClicked, setButtonClicked] = useState(false)

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const fetchGreeting = async () => {
    getGreeting().then(response => {
      const {data} = response
      console.log(response)
      const {greeting} = data.data

    
      setButtonClicked(true)
      setGreeting(greeting)
      setBtnText('Ok')
    })
    .catch(error => {
      setError('Server not found')
      setBtnText('Load Greeting')
    })
  }

  return (
    <div>
      <button data-testid="fetch-submit" onClick={fetchGreeting} disabled={buttonClicked}>
        {btnText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p data-testid="alert">{error}</p>}
      <button onClick={toggleTheme}>
        Current theme: {theme}
      </button>;
    </div>
  )
}