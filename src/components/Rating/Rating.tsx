import React, { useState } from 'react'

interface RatingProps {
    rating: number
}

function Rating({rating}: RatingProps) {
  const [cur, setCur] = useState(rating)

  function handleMouseEnter(index: number) {
    setCur(index)
  }

  function handleMouseLeave() {
    setCur(rating)
  }

  return (
    <div className="rating">
        {Array(5).fill(0).map((_, index) => (
            <span 
              key={index}
              className={index < cur ? 'filled' : ''}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              data-testid={index + 1} 
              >
            </span>
        ))}
    </div>
  )
}

export default Rating