import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState(false);
    function switchTheme(){
        setTheme(!theme);
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
