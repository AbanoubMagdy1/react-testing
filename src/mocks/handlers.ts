import {rest} from 'msw'
import { USERS } from '../data/users'

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(USERS)
        )
    })
]