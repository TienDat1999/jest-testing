import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import * as nextRouter from 'next/router';
import HumanDetail from '../pages/human/[id]'
import Human from '../pages/human'

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ query: {id:'abcxyz'} }));



const setupFormAfterOpen = () => {
    const userName = screen.queryByRole('textbox', {  name: /user name/i})
    const inputPassword = screen.queryByTestId('password-field-id-12')
    return {
        userName,
        inputPassword,
    }
  }

describe('Human testing', ()=> {
    // test('render human with id', async ()=> {
    //     render(<HumanDetail/>)
    //     const humaIDs =  screen.getByText("userID abcxyz")
    //     expect(humaIDs).toBeInTheDocument()
    // })

    test('It should open form', async ()=> {
        render(<Human/>)
        const openBtn = screen.getByRole('button', { name: /open model/i })
        fireEvent.click(openBtn)
        await waitFor(()=> {
            // expect(screen.queryByText('Subscribe')).toBeInTheDocument()
           const {userName, inputPassword } = setupFormAfterOpen()
           
        })
    })
})