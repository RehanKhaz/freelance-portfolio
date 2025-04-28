'use client'
import { useMyContext } from "@/app/context";
import { Bot, Phone } from "lucide-react";


const Hero = () => {
    const { setIsOpen } = useMyContext()
    return (
        <section id="home" className="padding ">
            <div className="min-h-[80vh]  w-full mt-[6em] flex-center ">
                <div className="w-fit h-full max-md:w-full flex-between flex-col">

                    <h2 id="stagger-animation" className="font-normal text-center !text-[2.5em] max-md:!text-[2em] max-sm:!text-[1.5em]  text-white">
                        Hello<span className="wave-animation max-md:text-3xl
                         text-4xl">👋 </span>! I am <span className="text-[#63FFCD] font-semibold">Rehan Khan.</span>
                    </h2>
                    <h1 id="stagger-animation" className="!text-7xl text-center  max-md:!text-[3.3em] max-sm:!text-[2.8em] !tracking-normal
                     ">
                        A <span className="text-amber-300">Next.JS Developer.</span>
                    </h1>
                    <p id="stagger-animation" className="text-[1.4em] max-w-4xl max-md:text-[1.3em] text-normal leading-6 text-center max-sm:text-left mt-6 max-md:mt-4 tracking-wide">
                        I Build Dynamic, SEO-Optimized NEXT.JS Websites that transform Traffic into Customers. I love to solve problems with code. I am passionate about integrating AI agents into websites for Autonomous workflows. Either you want to remake your website or create it from scratch, I will help you.
                    </p>

                    <div id="stagger-animation" className="flex-center mt-5 gap-5">
                        <a href="#contact" className="bg-green-400 max-md:text-[1.2em] font-normal flex-center gap-2 text-[1.5em] tracking-wider cursor-pointer  text-white px-12 max-md:px-8 py-2 max-sm:px-4 rounded-2xl">
                            Hire Me <Phone className="icon wave-animation inline-flex" />
                        </a>
                        <button onClick={() => setIsOpen(true)} className="bg-yellow-400 cursor-pointer font-normal max-md:text-[1.2em] flex-center gap-2 max-sm:px-4 text-[1.5em] tracking-wider  text-white px-12 max-md:px-8 py-2 rounded-2xl">
                            Chat With <Bot className="icon max-md:!size-8  inline-flex" />
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}


export default Hero;