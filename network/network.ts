import axios from 'axios'
import Router from 'next/router'
export interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export interface ErrorGenerator {
  message?: any
  status?: number
  response?: any
  error?: any
}

const BASE_URL = process.env.BASE_URL

/*
  Function to get base url based on language (micro services)
*/
const getURL = (server?: string) => {
  return BASE_URL || 'http://localhost:5000/'
}

/*
  Axios config
*/

export let instance = axios.create({
  baseURL: getURL(),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// const handleShowToast = async (message: string, isSuccess: boolean = false) => {
//   await store.dispatch(toastActions.openToast({ isSuccess: isSuccess, message: message }))
// }

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    const access_token = getCookie(COOKIES.ACCESS_TOKEN)
    if (config.headers !== undefined) {
      config.headers['Authorization'] = `Bearer ${access_token}`
    }
    return config
  },
  function (error: ErrorGenerator) {
    return Promise.reject(error)
  },
)

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    let customError: ErrorGenerator = {
      message: error?.message,
      status: error?.response?.status,
      error,
    }

    if (customError.status === 401) {
      removeCookie(COOKIES.ACCESS_TOKEN)
      Router.push('/login')
    }

    return Promise.reject(customError)
  },
)

export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date()
  let expires = ''
  if (exdays > 0) {
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    expires = `expires=${d.toUTCString()}`
  }
  document.cookie = `${cname}=${cvalue} ${expires ? `;expires=${expires}` : ''};path=/`
}

export const getCookie = (cname: string) => {
  let name = `${cname}=`
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const removeCookie = (cname: string) => {
  document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}


export enum COOKIES {
  CURRENT_USER = 'jesting.currentUser',
  ACCESS_TOKEN = 'jesting.authentication.token',
}