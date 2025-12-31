"use client";

import { createContext, useEffect, useState } from "react";
import { IappContext } from "./contextTypes";
import React, { useContext } from "react";

const containerContext = createContext({} as IappContext);

export function useAppContext() {
  return useContext(containerContext);
}

function AppContext({ children }: { children: React.ReactNode }) {
  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("searchBar");

    saved !== null && setSearchBar(JSON.parse(saved));
  }, []);

  return (
    <containerContext.Provider value={{ searchBar, setSearchBar }}>
      {children}
    </containerContext.Provider>
  );
}

export default AppContext;
