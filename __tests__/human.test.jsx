import { render } from "@testing-library/react"
import { NextRouter } from "next/router"
import Human from '../pages/human/index'

describe('Human testing', ()=> {
    test('render human page', ()=> {render(<Human/>)})
})