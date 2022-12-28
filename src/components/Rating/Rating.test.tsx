import React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Rating from './Rating'

test('Rating component', async () => {
    const user = userEvent.setup()
    render(<Rating rating={3}/>)
    const star2 = screen.getByTestId(2)
    const star3 = screen.getByTestId(3)
    const star4 = screen.getByTestId(4)
    expect(star2).toHaveClass('filled')
    expect(star3).toHaveClass('filled')
    expect(star4).not.toHaveClass('filled')
    
    await user.hover(star4)
    expect(star4).toHaveClass('filled')

    await user.unhover(star4)
    expect(star4).not.toHaveClass('filled')
    
})