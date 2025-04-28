'use client'
import Contact from "@/sections/Contact";
import Chatbot from "@/sections/Chatbot";
import { useEffect } from "react";
import { vapi } from "@/lib/vapi";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Skills from '@/sections/Skills'


const Main = () => {
  useEffect(() => {
    vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID)
  }, [])
  return (
    <main>
      <Chatbot />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default Main;