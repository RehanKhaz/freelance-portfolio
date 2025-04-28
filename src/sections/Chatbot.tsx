'use client'
import { useMyContext } from "@/app/context"
import Chat from "@/components/Chat"
import { BotMessageSquare, MessageSquareText, X } from "lucide-react"
import { useEffect, useRef } from "react"

const Chatbot = () => {
    const { isOpen, setIsOpen } = useMyContext()
    const chatBarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const onCtrlR = (e: KeyboardEvent) => {
            if (e.ctrlKey && (e.key == 'C' || e.key == 'c')) {
                setIsOpen((prev) => !prev)
            }

        }
        document.addEventListener('keydown', onCtrlR)
        return () => document.removeEventListener('keydown', onCtrlR)
    })


    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (chatBarRef.current && !chatBarRef.current.contains(e.target as Node))
                setIsOpen(false)
        }
        document.addEventListener('mousedown', handleMouseMove)
        return () => document.removeEventListener('mousedown', handleMouseMove)
    })
    return (
        <aside className="fixed z-[50] right-3 bottom-3 ">
            {!isOpen && <button onClick={() => setIsOpen((prev) => !prev)} className="z-10 inline-flex items-center  cursor-pointer justify-center bg-yellow-400  rounded-full  size-[5em] group relative">
                <MessageSquareText className="size-[3.3em] bg-transparent max-md:size-[2.8em] text-white" />
                <span className="px-2 w-fit absolute mask-clip  group-hover:flex hidden top-[-3.5em] h-[3em] flex-center text-lg  bg-white/30 text-white ">
                    Ctrl + C
                </span>
            </button>}
            {
                isOpen && <div ref={chatBarRef} className="min-h-[90vh] backdrop-blur-[1px] max-sm:min-h-[90vh] overflow-y-auto relative w-[30em] max-md:w-[23em] bg-[#0E0E10] max-sm:w-[94vw] max-sm:left-1 rounded-2xl border-2 border-white hide-scrollbar ">
                    <div onClick={() => setIsOpen(false)} className="absolute 
                    z-[50]  top-2 bg-yellow-300 cursor-pointer
                    rounded-full p-2 right-2">
                        <X className="size-[2em] text-white bg-transparent " />
                    </div>
                    <div className="h-full hide-scrollbar px-2 py-1 absolute top-3 left-0 w-full">
                        <div className="flex-center gap-2">
                            <BotMessageSquare className="bg-transparent size-12 max-md:sm-size-10 max-sm:size-8 text-green-500" />
                            <h3 className="font-semibold  !mt-0 uppercase tracking-wide text-3xl overflow-hidden max-md:text-2xl">Assistant</h3>
                        </div>
                        <Chat />
                    </div>

                </div>
            }
        </aside>
    )
}

export default Chatbot