
import * as nextRouter from 'next/router';
import { render, fireEvent, waitFor, screen, debug, getByPlaceholderText, cleanup } from '@testing-library/react'
import Login from '../pages/login'
import axiosService from '../network/axiosMethod';

afterEach(cleanup);
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/login' }));

describe('Test login', () => {
  test('test login fail', async () => {
    const loginSpy = jest.spyOn(axiosService, 'post')
    loginSpy.mockRejectedValue(new Error('Async error message'))
    render(<Login/>)
   
    const btn = screen.getByTestId('login')
    fireEvent.click(btn)
    await waitFor(() => screen.getByText('This is a fails alert — check it out!'))
  })

  test('test login success', async () => {
    const loginSpy = jest.spyOn(axiosService, 'post')
    loginSpy.mockResolvedValue()
    render(<Login/>)
   
    const btn = screen.getByTestId('login')
    fireEvent.click(btn)
  
    await waitFor(() => {
      const ax = screen.queryByText('This is a fails alert — check it out!')
      expect(ax).not.toBeInTheDocument()
    })
  })
})
