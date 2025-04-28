'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import Button from '@/components/Button'
import { OrbitControls, Center, PerspectiveCamera, useTexture } from '@react-three/drei'
import BentoGridBox from '@/components/BentoGridBox'

const Globe = () => {
    const earthTexture = useTexture('/assets/earth.jpg')
    return (
        <Center>
            <mesh
                scale={2}
                position={[0, 0, 0]}
                rotation={[0, Math.PI, 0]}
            >
                <sphereGeometry />
                <meshMatcapMaterial map={earthTexture} />
            </mesh>
        </Center>
    )
}

const About = () => {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('rehankhaz3666@gmail.com')
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <section id='about' className='min-h-dvh  padding  '>
            <div className='grid mt-[3em] max-md:mt-0 grid-cols-1   xl:grid-rows-6 gap-4 md:grid-cols-2 xl:grid-cols-3'>
                <BentoGridBox
                    src='/assets/rehandev.png'
                    title={"Hi! I'm Rehan Khan."}
                    desc={
                        'With 2+ years of experience in Web Development, I have honed my skills in Full Stack Development, creating dynamic, scalable, responsive & converting websites.'
                    }
                    containerClass='col-span-1 xl:row-span-3  '
                />

                <BentoGridBox
                    src='/assets/trust.png'
                    title={"Let's Build Trust First!"}
                    desc={
                        'I build websites grounded in trust, clear communication, and genuine passion for your success.'

                    }
                    containerClass='col-span-1  xl:row-span-3 '
                />

                <div id='bento-grid' className='col-span-1  xl:row-span-4'>
                    <div className='grid-container'>
                        <Canvas className='w-full h-full '>
                            <Globe />
                            <PerspectiveCamera position={[3, 4, 3]} />
                            <OrbitControls
                                enableRotate={true}
                                enableZoom={false}
                                enablePan={false}
                                autoRotate={true}
                                autoRotateSpeed={5}
                                dampingFactor={0.05}
                                rotateSpeed={0.5}
                            />
                            <ambientLight intensity={0.5} color={'0x#000'} />
                            <directionalLight intensity={1} />

                        </Canvas>

                        <h3 className='bento-grid-head'>
                            I’m very flexible with time zone communications & locations.
                        </h3>
                        <p className='bento-grid-desc'>
                            Based in Karachi, Pakistan. I collaborate remotely across time
                            zones to align with your schedule.
                        </p>
                        <Button
                            beam
                            title={"Let's Convert"}
                            containerClass='w-full'
                            href={'contact'}
                        />
                    </div>
                </div>

                <BentoGridBox
                    src='/assets/idea.png'
                    title={"Let's Convert Your Vision!"}
                    desc={
                        "I translate your unique vision into a high performing web presence through thoughtful strategy, creative design, and technical precision."
                    }
                    containerClass='xl:col-span-2  xl:row-span-3 ' 
                />

                <div id='bento-grid' className='xl:col-span-1 flex flex-col p-4 items-center justify-center  bg-[#0E0E10] border-[1.8px] rounded-xl border-[#1C1C1C] xl:row-span-2'>
                    <Image
                        src='/assets/grid4.png'
                        alt='grid-4'
                        width={200}
                        height={200}
                        className='scale-[1.6] mt-8 pointer-events-none'
                    />
                    <p className='text-lg  text-[#A2A3A9]'>Contact me</p>
                    <div className='flex-center gap-3'>
                        <div
                            className='flex-center cursor-pointer'
                            onClick={() => handleCopy()}
                        >
                            <Image
                                className='inline-flex object-cover pointer-events-none'
                                src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                                alt='copy'
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className='text-xl font-medium text-white'>
                            rehankhaz3666@gmail.com
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
