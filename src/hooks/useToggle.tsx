import { useState, useCallback } from "react";

export default function useToggle(initialVal = false): [boolean, Function] {
  const [state, setState] = useState(initialVal);

  const toggle = useCallback(() => {
    setState(state => !state);
  }, []);
  
  return [state, toggle];
}