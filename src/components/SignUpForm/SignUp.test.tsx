import React from 'react'
import { screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Signup, { errorMessages } from './SignUp'

describe("Signup", () => {
    it("should render the form", () => {
        render(<Signup/>)
    
        const firstName = screen.getByPlaceholderText(/first/i)
        const lastName = screen.getByPlaceholderText(/last/i);
        const email = screen.getByPlaceholderText(/email/i);
    
        expect(firstName).toBeInTheDocument()
        expect(lastName).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    })

    it("validate name fields", async () => {
        render(<Signup/>)
        const user = userEvent.setup()
    
        const firstName = screen.getByPlaceholderText(/first/i)
        const lastName = screen.getByPlaceholderText(/last/i);
        const submitButton = screen.getByRole("button", {name: /submit/i});
    
        await user.type(firstName, "a")
        await user.type(lastName, "a")
        await user.click(submitButton)    

        const errors = screen.queryAllByText(/2/i)
        expect(errors).toHaveLength(2)
    })
}) 