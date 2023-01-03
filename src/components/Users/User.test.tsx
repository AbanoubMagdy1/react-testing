import {screen, render} from '@testing-library/react';
import { server } from '../../mocks/server';
import { rest } from 'msw'
import {USERS} from '../../data/users';
import Users from './Users';

describe("Users component", () => {
    test("Render users list", async () => {
        render(<Users />)

        const usersList = await screen.findAllByRole("listitem")
        expect(usersList).toHaveLength(USERS.length)
    })

    test("Render error message", async () => {
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        render(<Users />)

        const errorMessage = await screen.findByRole("alert")
        expect(errorMessage).toBeInTheDocument()
    })
})