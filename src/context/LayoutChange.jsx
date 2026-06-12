import { createContext, useEffect, useState } from "react";

export const LayoutChangeContext = createContext();

const LayoutChangeProvider = ({ children }) => {
    const [layout, setLayout] = useState(() => {
        return localStorage.getItem("layout") || "vertical";
    });
    useEffect(() => {
        localStorage.setItem("layout", layout);
    }, [layout]);

    return (
        <LayoutChangeContext.Provider value={{ layout, setLayout }}>
            {children}
        </LayoutChangeContext.Provider>
    );
};

export default LayoutChangeProvider;