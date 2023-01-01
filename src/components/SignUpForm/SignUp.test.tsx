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

        expect(screen.queryAllByText(errorMessages.name.min)).toHaveLength(2)

        user.clear(firstName)
        user.clear(lastName)
        await user.type(firstName, "afsdfsdffsdffsdfs")
        await user.type(lastName, "afsdfsdffsdffsdfs")
        expect(screen.queryAllByText(errorMessages.name.max)).toHaveLength(2)

    })

    it("validate email field", async () => {
        render(<Signup/>)
        const user = userEvent.setup()
    
        const email = screen.getByPlaceholderText(/email/i);
        const submitButton = screen.getByRole("button", {name: /submit/i});
    
        await user.type(email, "afsdf@")
        await user.click(submitButton)    

        expect(screen.getByText(errorMessages.email.email)).toBeInTheDocument()

        user.clear(email)
        await user.type(email, "a@a")
        expect(screen.getByText(errorMessages.email.email)).toBeInTheDocument()
 
        user.clear(email)
        await user.type(email, "a@a.com")
        expect(screen.queryByText(errorMessages.email.email)).not.toBeInTheDocument()
    })
}) 