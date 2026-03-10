import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="h-screen">
        <div className='max-w-7xl max-xl:px-10 max-md:h-full max-md:flex-col flex mx-auto gap-4 justify-evenly items-center max-sm:pt-10'>
            <div className='w-45/100 max-md:w-full flex flex-col gap-4'>
                <h1 className='text-4xl max-md:text-3xl max-sm:text-2xl font-bold leading-normal max-md:text-center'><span className='uppercase bg-bainiac p-2 rounded-md text-3xl text-white'>kcse</span> Preparation <span className="md:block"> with <span className='bg-linear-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent'>Personal Guidance</span></span></h1>
                <p className='text-lg max-md:text-md'> Get focused, one-on-one support to help you excel in your KCSE exams. I provide structured lessons, clear explanations, and targeted practice to help you understand difficult topics and improve your exam performance.</p>
                <div className="flex gap-4 mt-4 max-md:items-center max-md:justify-center max-sm:flex-col">
                    <Button className="relative w-1/3 py-6 capitalize text-md cursor-pointer border-2 border-black bg-transparent dark:border-white overflow-hidden text-black dark:text-white  group max-sm:w-full ">

                        <span className="relative z-10">get started</span>

                        <span
                            className="absolute left-[-40%] top-1/2 -translate-y-1/2
                            h-[120%] w-[40%]
                            rounded-full bg-bainiac blur-2xl
                            transition-transform duration-700
                            group-hover:translate-x-[250%]"
                        ></span>

                    </Button>
                    
                    
                    <Button className='bg-primary cursor-pointer p-6 w-1/3 capitalize border-2 border-transparent hover:text-primary hover:bg-transparent hover:border-primary ease-in-out duration-500 max-sm:w-full'>contact tutor</Button>
                </div>
            </div>
            <div className='relative w-2/5 h-[70vh] max-md:w-full'>
                <Image src="/bainiac.png" alt='bainiac_image' fill/>
            </div>
        </div>
    </div>
  )
}

{/* <div className="max-w-xl space-y-6">
  <h1 className="text-4xl font-bold leading-tight">
    KCSE Preparation with Personal Guidance
  </h1>

  <p className="text-lg text-muted-foreground">
    Get focused, one-on-one support to help you excel in your 
    KCSE exams. I provide structured lessons, clear explanations, 
    and targeted practice to help you understand difficult topics 
    and improve your exam performance.
  </p>

  <p className="text-muted-foreground">
    With guided revision, past paper practice, and proven exam 
    strategies, you will gain the confidence and knowledge needed 
    to perform at your best in the KCSE.
  </p>

  <div className="flex gap-4 pt-2">
    <Button size="lg">Register Now</Button>
    <Button size="lg" variant="outline">Contact Tutor</Button>
  </div>
</div> */}