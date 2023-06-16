import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import RegisterPage from '../pages/register'
import userEvent from "@testing-library/user-event";

const setupForm = () => {
  render(<RegisterPage />)
  const inputName = screen.getByRole('textbox', { name: /name/i })
  const inputEmail = screen.getByRole('textbox', { name: /email/i })
  const inputPasswordConfirm = screen.getByTestId('password-confirm-field-id')
  const inputPassword = screen.getByTestId('password-field-id')
  const autoCompleteSelect = screen.getByRole('combobox', {  name: /movie/i})
  const registerBtn = screen.getByRole('button', { name: /register/i })
  return {
    inputName,
    inputEmail,
    inputPassword,
    inputPasswordConfirm,
    autoCompleteSelect,
    registerBtn,
  }
}

describe('Test Register Form', () => {
  it('It should have all require', async () => {
    const { inputPassword, inputName, inputEmail, registerBtn } = setupForm()
    fireEvent.change(inputPassword, { target: { value: '' } })
    fireEvent.change(inputName, { target: { value: '' } })
    fireEvent.change(inputEmail, { target: { value: '' } })
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Password is required')).toBeInTheDocument()
      expect(
        screen.getByText('Confirm Password is required')
      ).toBeInTheDocument()
    })
  })

  it('It should not alow invalid email is: "23"', async () => {
    const { inputEmail, registerBtn } = setupForm()
    fireEvent.change(inputEmail, { target: { value: '23' } })
    expect(inputEmail.value).toBe('23')
    fireEvent.click(registerBtn)
    await waitFor(() => {
      screen.getByText(/Email not correct format/i)
    })
  })

  it('It should not alow invalid email is: "tiendat"', async () => {
    const { inputEmail, registerBtn } = setupForm()
    fireEvent.change(inputEmail, { target: { value: 'tiendat' } })
    expect(inputEmail.value).toBe('tiendat')
    fireEvent.click(registerBtn)
    await waitFor(() => {
      screen.getByText(/Email not correct format/i)
    })
  })

  it('It should alow invalid email like: "tiendat@gmail.com"', async () => {
    const { inputEmail, registerBtn } = setupForm()
    fireEvent.change(inputEmail, { target: { value: 'tiendat@gmail.com' } })
    expect(inputEmail.value).toBe('tiendat@gmail.com')
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(
        screen.queryByText(/Email not correct format/i)
      ).not.toBeInTheDocument()
    })
  })
})

describe('Test Validate Password', () => {
  it('It should have length more than 4 character', async () => {
    const { inputPassword, registerBtn, inputPasswordConfirm } = setupForm()
    fireEvent.change(inputPassword, { target: { value: '123' } })
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(
        screen.getByText(/Password length should be at least 4 characters/i)
      ).toBeInTheDocument()
    })
  })

  it('It should not allow empty password', async () => {
    const { inputPassword, registerBtn } = setupForm()
    fireEvent.change(inputPassword, { target: { value: '' } })
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(screen.getByText('Password is required')).toBeInTheDocument()
    })
  })

  it('It should show confirm password not match', async () => {
    const { inputPassword, registerBtn, inputPasswordConfirm } = setupForm()
    fireEvent.change(inputPassword, { target: { value: 'sdfsetertetertedd' } })
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
    })
  })

  it('It should show confirm password not match', async () => {
    const { inputPassword, registerBtn, inputPasswordConfirm } = setupForm()
    fireEvent.change(inputPassword, { target: { value: 'sdfsetertetertedd' } })
    fireEvent.change(inputPasswordConfirm, {
      target: { value: 'sdfsetertetertedd' },
    })
    fireEvent.click(registerBtn)
    await waitFor(() => {
      expect(
        screen.queryByText('Passwords do not match')
      ).not.toBeInTheDocument()
    })
  })

  it('It should show a valid value when select', async () => {
    const { autoCompleteSelect, registerBtn} = setupForm()
    // userEvent.type(autoCompleteSelect, "the go")
    fireEvent.change(autoCompleteSelect, { target: { value: '"the go' } })
    await waitFor(() => {
      const les = screen.getByText("The Godfather")
      fireEvent.click(les)
    });
    // expect(screen.getByRole('combobox', {  name: /movie/i})).toHaveTextContent('The Godfather')
    expect(screen.getByDisplayValue('The Godfather')).toBeInTheDocument();
  })
})
