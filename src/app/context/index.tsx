'use client'

import { MyContextType } from '@/types';
import { createContext, ReactNode, useContext, useState } from 'react';

const MyContext = createContext<MyContextType>({} as MyContextType);

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MyContext.Provider value={{ isOpen, setIsOpen }
        }>
            {children}
        </MyContext.Provider>
    );
}