'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { myProjects } from '@/constants'
import Link from 'next/link'
import { Fullscreen } from 'lucide-react'
import { RxExitFullScreen } from 'react-icons/rx'
import { direction } from '@/types'


const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const miniVideoRef = useRef<HTMLVideoElement | null>(null)
    const currentProject = myProjects[selectedProjectIndex]
    const projectCount = myProjects.length
    const handleProject = (direction: direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'prev') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else if (direction === 'next') {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex
            }
        });
    };


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (videoRef.current && !videoRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleMouseMove)
        return () => {
            document.removeEventListener('mousedown', handleMouseMove)
        }
    })

    useEffect(() => {
        if (isOpen) {
            miniVideoRef.current?.pause()
        } else {
            miniVideoRef.current?.play()
        }
    }, [isOpen])


    return (
        <>
            <section id='work' className=' mt-[5em] padding'>
                <div className='min-h-[70vh] w-full'>
                    <h2>My Works.</h2>
                    <div className='flex items-center justify-between max-md:gap-6 gap-10 mt-6 max-md:flex-col w-full h-full'>
                        <div id='animation' className='rounded-2xl group relative overflow-hidden w-1/2 max-md:w-full h-[60vh] max-sm:h-[40vh] border-neutral-600 flex-center border-[1.2px] bg-[#0E0E10]/70  py-4 '>
                            <button onClick={() => setIsOpen(true)}>
                                <Fullscreen className='group-hover:flex max-md:hidden absolute z-[40]  hidden cursor-pointer  ' />
                            </button>

                            <video ref={miniVideoRef} className='aspect-video absolute inset-0 h-full w-full' src={currentProject.texture} loop={!isOpen} autoPlay={!isOpen} muted />
                        </div>

                        <div id='animation' className=' bg-black/50 max-md:w-full w-1/2 rounded-2xl shadow-[-0.1px_0.1px_5px_rgb(255,255,255)] overflow-hidden p-4 relative  '>
                            <div className='flex flex-col  gap-2  w-full '>
                                <div className='absolute top-0 right-0'>
                                    <Image className={'object-cover'} alt={'spot-light'} src={currentProject.spotlight} width={400} height={400} />
                                </div>
                                <div style={{
                                    backgroundColor: currentProject.logoStyle.backgroundColor,
                                    border: currentProject.logoStyle.border,
                                    boxShadow: currentProject.logoStyle.boxShadow,
                                }} className={`p-3 w-fit rounded-lg`}>
                                    <currentProject.logo className={'object-cover text-white size-10'} />
                                </div>
                                <h3 id='animated-text' className='mt-4 '>
                                    {currentProject.title}
                                </h3>
                                <p id='animated-text' className='bento-grid-desc'>
                                    {currentProject.desc}
                                </p>
                                <p id='animated-text' className='bento-grid-desc'>
                                    {currentProject.subdesc}
                                </p>
                                <div className='flex-between max-md:flex-col  mt-5 w-full'>
                                    <div className='flex-center gap-2'>

                                        {currentProject.tags.map((tag) => {
                                            return <div key={tag.id} className='w-[3em] p-1 h-[3em] flex-center
                                        
                                        rounded-lg bg-[#1A1A1C]'> <Image key={tag.id} src={tag.path} alt={tag.name} className='object-cover' width={35} height={35} />
                                            </div>
                                        })}

                                    </div>
                                    <Link href={currentProject.href} target='_blank' className='flex-center mt-4 gap-3'>
                                        <p className='text-neutral-600 font-medium  text-[1.1em]'>Live Site Demo</p>
                                        <Image src={'/assets/right-arrow.png'} className='rotate-[-30deg] object-cover  ' alt='link' width={18} height={18} />
                                    </Link>
                                </div>
                                <div className='flex-between cursor-pointer mt-4 w-full'>
                                    <div onClick={() => handleProject('prev')} className='flex-center bg-gradient-to-r from-[#131315]  to-black p-3 rounded-full '>
                                        <Image src={'/assets/left-arrow.png'} alt='left-arrow' width={20} height={20} />
                                    </div>
                                    <div onClick={() => handleProject('next')} className='flex-center bg-gradient-to-r from-[#131315] cursor-pointer  to-black p-3 rounded-full '>
                                        <Image src={'/assets/right-arrow.png'} alt='left-arrow' width={20} height={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {
                isOpen && <div className='fixed inset-0 z-[50] flex-center bg-black/50   min-h-screen w-dvw '>

                    <div className='h-5/6  w-4/6 flex-center mt-[2em] backdrop-blur-[1.3px] border-[1.3px] relative border-neutral-300 rounded-2xl'>
                        <button onClick={() => setIsOpen(false)} className='absolute z-[50] p-1 rounded-full bg-neutral-400 cursor-pointer top-4 right-4'>
                            <RxExitFullScreen className="icon text-white" />
                        </button>
                        <video ref={videoRef} className=' w-[50em]' src={currentProject.texture} loop autoPlay muted />
                    </div>
                </div>
            }
        </>
    )
}

export default Projects