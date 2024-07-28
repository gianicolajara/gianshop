import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ThemeContext = createContext({});

const ThemeProviderContext = ({ children }: Props) => {
  const [themeLS, setThemeLS] = useLocalStorage({
    name: "theme",
  });

  console.log(themeLS);

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export default ThemeProviderContext;
