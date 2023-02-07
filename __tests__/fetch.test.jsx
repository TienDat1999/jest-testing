import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, debug } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from '../pages/fetch'
import {getGreeting} from '../apis/fecthApi'

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({ greeting: 'hello there' }))
//   })
// )

jest.mock('../apis/fecthApi')

describe('Test fetching', () => {
  test('loads and displays greeting', async () => {
    getGreeting.mockRejectedValue(new Error('Server not found'))
    render(<Fetch/>)
    const btn = screen.getByTestId('fetch-submit')
    fireEvent.click(btn)

    await waitFor(() => screen.getByText('Server not found'))
  })

  test('handles server error', async () => {
    render(<Fetch/>)
    const buttonEl = screen.getByText(/Load Greeting/i);
  })
 
  test("Test theme button toggle", async () => {
    render(<Fetch/>);
    const buttonEl = screen.getByText(/Current theme/i);
      
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/dark/i)
   
  });
})
