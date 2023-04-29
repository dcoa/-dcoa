import { useState, createContext, useContext, ReactElement } from "react";
import Cookies from "js-cookie";

type Language = "en" | "es";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => { },
});

type Props = {
    children: ReactElement
}

export const LanguageProvider = ({ children }: Props) => {
    const [language, setLanguage] = useState<Language>(
        Cookies.get("lang") || "en"
    );

    const handleSetLanguage = (lang: Language) => {
        Cookies.set("lang", lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
