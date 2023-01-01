import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

export default function Mode(){
    const { isDarkMode, toggleDarkMode } = useContext(AppContext);

    return (
        <>
         <h3>We are using {isDarkMode ? "dark" : "light"}</h3>
        <button onClick={toggleDarkMode}>Toggle</button>
        </>
    )
}