import React, {createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext<any>(null);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if(localTheme){
            setTheme(localTheme);
        }
    }, []);


    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
}
