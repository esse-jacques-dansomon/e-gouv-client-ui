'use client'

import { createContext, useContext, useState } from "react";


type AppContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    locale: string;
    setLocale: (locale: string) => void;
};

// Create a context for the header tabs
const AppContext = createContext<AppContextType>({
    activeTab: "espace citoyen",
    setActiveTab: () => {},
    locale: "fr",
    setLocale: () => {},
});

// Tabs provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState<string>("espace citoyen"); // default tab
    const [locale, setLocale] = useState<string>("fr"); // default locale
    const [isEspaceCitoyen, setIsEspaceCitoyen] = useState<boolean>(true);

    return (
        <AppContext.Provider value={{ activeTab, setActiveTab, locale, setLocale }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the Tabs context
export const useAppContext = () => {
    return useContext(AppContext);
};