import { Dispatch, SetStateAction } from "react";

interface MyContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface ChatType {
    sender: 'ai' | 'user',
    message: string
}

type direction = 'prev' | 'next'