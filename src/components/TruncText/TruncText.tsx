import React, { useMemo, useState } from 'react'

interface TruncTextProps {
    text: string;
}

function TruncText({text}: TruncTextProps) {
  const [expanded, setExpanded] = useState(false)

  const displayText = useMemo(function(){
    if (expanded) return text
    return text.slice(0, 30)
  }, [expanded, text])  

  function toggleExpanded() {
    setExpanded(!expanded)
  }

  return (
    <>
    <p data-testid="text">{displayText}</p>
    <button data-testid="toggle" onClick={toggleExpanded}>
        {expanded ? 'show less' : 'show more'}
    </button>
    </>
  )
}

export default TruncText