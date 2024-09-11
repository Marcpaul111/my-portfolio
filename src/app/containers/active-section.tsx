"use client";
import { SectionName } from "../lib/types";
import React, { useState, useContext, createContext } from "react";
import { error } from "console";

type ActiveSectionContextProvideProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvideProps({
  children,
}: ActiveSectionContextProvideProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("#home");

  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be within an ActiveSectionContextProvider"
        );
    }

    return context;
}
