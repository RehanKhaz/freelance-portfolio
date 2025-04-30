'use client'
import { AiOutlinePlus } from 'react-icons/ai';
import Beam from '@/components/Beam';
import Form from '@/components/Form';


const Contact = () => {
  return (
    <section id='contact' className='padding mt-[5em]'>
      <div className='w-full  flex-between flex-col min-h-[100vh] bg-[#0F0F11] rounded-3xl border-[1.4px] border-neutral-500'>
        <div className=' rounded-t-3xl overflow-hidden bg-gradient-to-r via-[#787879]  to-[#1B1B1D] from-[#303032] flex justify-between px-10 max-md:px-5 py-4 max-md:py-2 w-full'>
          <div className='flex-center gap-4'>
            {['#05DF72', 'yellow', '#63FFCD'].map((bg, index) => {
              return <Beam key={index} bg={bg} />
            })}
          </div>
          <AiOutlinePlus className='size-8 fill-[#4A4A4B]' />
        </div>
        <div className=' py-4 h-full px-3 mt-[2em]   w-[30em] max-md:w-[80vw]  max-sm:w-[90vw] '>
          <div className='flex flex-col gap-3'>
            <h3 id='stagger' className='text-4xl max-md:text-3xl font-medium text-neutral-300  tracking-wide '>
              Let&apos;s Talk
            </h3>
            <p id='stagger' className='text-lg font-medium tracking-wide text-neutral-400'>
              Whether you&apos;re looking to build a new website, improve your
              existing platform, or bring a unique project to life. Don&apos;t be
              Late, It&apos;s the Right time to Digitalize your Business.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
