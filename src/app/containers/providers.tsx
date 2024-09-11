import ActiveSectionContextProvider from "./active-section";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
  );
}
