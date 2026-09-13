"use client";

/* =============== Import Sections =============== */
import { createContext, ReactElement, useEffect, useState } from "react";
import React, { useContext } from "react";

export interface IappContext {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  isUserAxist: boolean;
  setIsUserAxist: React.Dispatch<React.SetStateAction<boolean>>;
  isUserNumber: string;
  userIptType: "email" | "number" | null;
  setUserIptType: React.Dispatch<
    React.SetStateAction<"email" | "number" | null>
  >;
}

const containerContext = createContext({} as IappContext);
export function useAppContext(): IappContext {
  return useContext(containerContext);
}

function AppContext({ children }: { children: React.ReactNode }): ReactElement {
  // =============== open & close search bar panel ===============
  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect((): void => {
    const SaveSearchBar: () => void = () => {
      const saved = localStorage.getItem("searchBar");

      if (saved != null) {
        setSearchBar(JSON.parse(saved));
      }
    };

    SaveSearchBar();
  }, []);
  // =============== checking user is login or signin ===============
  const [isUserAxist, setIsUserAxist] = useState<boolean>(false);
  const [isUserNumber, setIsUserNumber] = useState<string>("");
  const [userIptType, setUserIptType] = useState<"email" | "number" | null>(
    null,
  );

  useEffect((): void => {
    if (userIptType == "number") {
      const CheckUserIptType: () => void = () => {
        const userNumber = localStorage.getItem("userNumber");

        if (userNumber != null) {
          setIsUserNumber(JSON.parse(userNumber));
        }
      };

      CheckUserIptType();
    }
  }, [isUserNumber, userIptType]);

  return (
    <containerContext.Provider
      value={{
        searchBar,
        setSearchBar,
        isUserAxist,
        setIsUserAxist,
        isUserNumber,
        userIptType,
        setUserIptType,
      }}
    >
      {children}
    </containerContext.Provider>
  );
}

export default AppContext;
