import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from '../pages/fetch'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

describe('Test fetching', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('loads and displays greeting', async () => {
    render(<Fetch url="/greeting" />)
    const btn = screen.getByTestId('fetch-submit')
    expect(btn).toBeInTheDocument()
    // fireEvent.click(btn)
    // fireEvent.click(screen.getByTestId('Load Greeting'))

    // await waitFor(() => screen.getByRole('heading'))

    // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    // expect(screen.getByRole('button')).toBeDisabled()
  })

  test('handles server error', async () => {
    const response = {
      statusCode: 200,
      message: 'Success',
      data: {
        greeting: 'hello there',
      },
    }
    server.use(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(200).json(response))
      })
    )

    render(<Fetch url="/greeting" />)
    userEvent.click(screen.getByText('Load Greeting'))
    await waitFor(() => {
      const heading = screen.findByRole('heading', { name: 'hello there' })
      expect(heading).toBeInTheDocument()
      // expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
  })
})
