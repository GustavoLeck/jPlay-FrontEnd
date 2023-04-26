import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [getMusicasFiltradas, setMusicasFiltradas] = useState([]);

  return (
    <AppContext.Provider
      value={{
        getMusicasFiltradas,
        setMusicasFiltradas,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
