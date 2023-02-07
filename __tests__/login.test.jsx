

import {doAdd} from "../pages/index";
import {add, greeting, bar} from "../function/math";
import * as math from "../function/math";

// import { render, fireEvent, waitFor, screen, debug } from '@testing-library/react'
// import axios from 'axios'
// import '@testing-library/jest-dom'
// import Login from '../pages/login'

// const myMockFn = jest.fn(cb => cb(null, true));

// describe('Test login', () => {
//   test('login with correct account', async () => {
//     axios.post.mockImplementationOnce(()=> Promise.resolve({
//         statusCode: 200,
//         message: 'successfully',
//       }))
//     render(<Fetch/>)

//     const btn = screen.getByTestId('fetch-submit')
//     fireEvent.click(btn)
//     await waitFor(() => screen.getByText('Server not found'))
//   })
// })

jest.mock('../function/math')
const mockedSong = jest.mocked(math);

test("calls math.add", () => {
    doAdd(1,3)
    expect(math.add).lastCalledWith(1,3)
    mockedSong.add.mockReturnValue(4)
    expect(mockedSong.add(1,2)).toBe(4)
    // const addCaculate = jest.fn(doAdd)
    // expect(addi).toReturnWith(1)
  });
  
  test("calls math.subtract", () => {
    //app.doSubtract(1, 2);
    // expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });