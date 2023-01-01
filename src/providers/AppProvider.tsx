import { createContext, ReactNode } from "react"
import useToggle from "../hooks/useToggle";

interface AppContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default function AppProvider({ children }: AppProviderProps) {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}