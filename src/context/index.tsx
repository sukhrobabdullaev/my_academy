'use client'

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [isShow, setIsShow] = useState(false);

    return (
        <SidebarContext.Provider value={{isShow, setIsShow}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useAppContext(){
    return useContext(SidebarContext)
}