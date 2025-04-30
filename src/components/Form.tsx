import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import Beam from './Beam';


const Form = () => {
    const [state, handleSubmit] = useForm('xzzezrga');
    const formRef = useRef<HTMLFormElement | null>(null)
    useEffect(() => {
        if (state.succeeded) {
            formRef.current?.reset()
            toast.success('Message Sent Successfully!')
        }
    }, [state.succeeded])
    return (
        <>
            <form id='form' onSubmit={handleSubmit} ref={formRef} className='flex  flex-col mt-3 gap-5'>
                <label id='stagger'  htmlFor="name">
                    <span className='input-label'>Full Name</span>
                    <input required autoComplete='off' autoFocus name='name' id='name' placeholder='Rehan Khan' className='input-field' type="text" />
                    <ValidationError
                        prefix="Full Name"
                        field="name"
                        errors={state.errors}
                    />
                </label>
                <label id='stagger'  htmlFor="email">
                    <span className='input-label'>Email Address</span>
                    <input required name='email' id='email' placeholder='rehankhaz3666@gmail.com' className='input-field' type="text" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </label>
                <label id='stagger'  htmlFor="subject
                              ">
                    <span className='input-label'>Subject</span>
                    <input required name='subject' id='subject' placeholder='I want to integrate AI Agents into my website. ' className='input-field' />
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </label>
                <label id='stagger' htmlFor="message">
                    <span className='input-label'>Message</span>
                    <textarea required name='message' id='message' placeholder='I want to build a website for my business' className='input-field' rows={5} />
                    <ValidationError
                        prefix="message"
                        field="message"
                        errors={state.errors}
                    />
                </label>
                <button id='stagger' className='w-full flex-center gap-3 cursor-pointer text-neutral-300 text-[1.1em] rounded-2xl bg-black/50 px-4 py-3' type='submit'>
                    <Beam bg='yellow' />
                    <p> {state.submitting ? 'Sending ...' : 'Send Message'}</p>
                    <Image alt='Arrow-up' width={14} height={14} src={'/assets/arrow-up.png'} className={'object-cover wave-animation '} />

                </button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Form