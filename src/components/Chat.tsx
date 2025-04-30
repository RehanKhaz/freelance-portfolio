'use client'
import { ChatType } from "@/types"
import { ArrowRight, User } from "lucide-react"
import React, { FormEvent, useEffect, useRef, useState } from "react"

const Chat = () => {
    const [userQuestion, setUserQuestion] = useState('')
    const [chats, setChats] = useState<ChatType[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        const onCtrlI = (e: KeyboardEvent) => {
            if (e.ctrlKey && (e.key == 'i' || e.key == 'I')) {
                inputRef.current?.focus()
            }
        }
        document.addEventListener('keydown', onCtrlI)
        return () => document.removeEventListener('keydown', onCtrlI)
    }, [])

    const handleChat = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userQuestion.trim()) {
            alert('Please write your question first.')
            return
        }

        setUserQuestion('')

        setChats(prev => [
            ...prev,
            { sender: 'user', message: userQuestion }
        ])

        try {
            const res = await fetch('/api/chat/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userQuestion, chatHistory : chats })
            })

            if (!res.ok) {
                console.error('API error', res.statusText)
                return
            }

            const result = await res.json() as { text: string }
            setChats(prev => [
                ...prev,
                { sender: 'ai', message: result.text }
            ])
        } catch (error) {
            console.error(error)
        }
    }
    const chatViewRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        chatViewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chats.length, chats])

    const newChat = () => {
        setChats([])
    }

    return <div className="overflow-x-hidden min-h-[90%] flex items-center justify-center py-4">
        <div className="w-full flex flex-col gap-4">
            <div className="w-full min-h-full items-end justify-between flex-col flex">
                <div className="flex flex-col w-full gap-4  min-h-[1vh]">
                    {chats.map((chat, i) => (
                        <div
                            key={i}
                            ref={chatViewRef}
                            className={`flex items-start text-white ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >

                            <div
                                className="flex  gap-2 border-[1.2px]  border-white relative  px-3 max-sm:px-1.5 py-2 max-sm:pt-2 rounded-xl">
                                {chat.sender == 'user' ?
                                    <User className=" bg-transparent size-[2em]" /> :
                                    <div
                                        className="size-[3em]   overflow-hidden bg-yellow-300 rounded-full flex-center ">
                                        <p key={i} className="text-white inline-flex bg-transparent font-semibold text-lg">RK
                                        </p>
                                    </div>
                                }
                                <div className={`flex flex-col text-lg  text-left  w-full `}>
                                    {chat.message}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="overflow-hidden text-white mt-6 text-3xl font-medium tracking-wide w-full text-center">
                    Hi <span className="wave-animation">👋</span> <span className="text-green-500">Brother</span>! <br /> Glad to Have you There!
                </h1>
                <form onSubmit={handleChat} className="flex flex-col mt-4 items-center justify-center w-full gap-2">
                    <div className="flex border-2 border-white rounded-xl w-full gap-2">

                        <input
                            ref={inputRef}
                            type="text"
                            value={userQuestion}
                            onChange={e => setUserQuestion(e.target.value)}
                            placeholder="Write your question… (CTRL + I )"
                            className="flex-1 text-xl text-white indent-1.5  rounded-xl outline-none"
                        />
                        <button type="submit" className=" p-3 cursor-pointer rounded-full">
                            <ArrowRight className="bg-transparent text-white" />
                        </button>
                    </div>
                    <button onClick={() => newChat()} disabled={chats.length == 0} className={`px-4 ${chats.length == 0 ? 'disabled:opacity-80 disable: cursor-not-allowed' : 'cursor-pointer'}  py-2 text-[1em] font-semibold tracking-wide rounded-2xl bg-white/20 text-white`}>
                        New Chat
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default Chat