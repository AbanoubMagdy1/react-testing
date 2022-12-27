import React from 'react'
import { render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TruncText from './TruncText'
import "@testing-library/jest-dom"

const text = 'this is a very long text thatshould be truncated, I warn you..................'

test('TruncText component', async () => {
    const user = userEvent.setup();
    const {getByTestId} = render(<TruncText text={text}/>)
    const textEle = getByTestId('text')
    const button = getByTestId('toggle')

    expect(textEle).toHaveTextContent(text.slice(0, 30))

    await user.click(button)
    expect(textEle).toHaveTextContent(text)

    await user.click(button)
    expect(textEle).toHaveTextContent(text.slice(0, 30))
})