"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import { Theme, themes } from "@/types/theme";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(
    null
);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}