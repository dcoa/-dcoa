import { ReactElement, useState, useEffect, useCallback, useContext, useMemo } from "react"
import { getGeneralData } from "../database"
import { LanguageProvider } from "../hooks/language/useLanguage"
import { AppContext } from "./AppContext"


type Props = {
    children: ReactElement
}

export const AppProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState(true);
    const [generalData, setGeneralData] = useState<object[] | null>(null);
    const [projects, setProjects] = useState<object[] | null>(null);

    const getGeneralDataMemoized = useCallback(async () => {
        return await getGeneralData().then((data) => {
            setGeneralData(data);
            setLoading(false);
        })
    }, []);

    const getDataSection = useCallback((section: string) => {
        if (generalData) {
            return generalData.find((doc) => doc.id === section);
        }
        return null;
    }, [generalData]);

    useEffect(() => {
        getGeneralDataMemoized();
    }, [getGeneralDataMemoized]);

    const contextValue = useMemo(() => ({
        getDataSection,
        projects
    }), [getDataSection, projects]);

    return (
        <LanguageProvider>
            <AppContext.Provider value={contextValue}>
                {loading ? <p>Loading...</p> : children}
            </AppContext.Provider>
        </LanguageProvider>
    )
}

export const useGeneralContext = () => useContext(AppContext);