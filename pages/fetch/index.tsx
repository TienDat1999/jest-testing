import React, {useState, useReducer} from 'react'
import axios from 'axios'
import axiosService from '../../network/axiosMethod';

const initialState = {
  error: null,
  greeting: null,
}

function greetingReducer(state: any, action: any) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        greeting: action.greeting,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        greeting: null,
      }
    }
    default: {
      return state
    }
  }
}

export default function Fetch({url}: any) {
  const [{error, greeting}, dispatch] = useReducer(
    greetingReducer,
    initialState,
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async (url: string) => {
    axiosService.getAll(url, null).then(response => {
      const {data} = response
      const {greeting} = data.data
      dispatch({type: 'SUCCESS', greeting})
      setButtonClicked(true)
    })
    .catch(error => {
      dispatch({type: 'ERROR', error})
    })
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'

  return (
    <div>
      <button data-testid="fetch-submit" onClick={() => fetchGreeting('/greeting')} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p data-testid="alert">Oops, failed to fetch!</p>}
    </div>
  )
}