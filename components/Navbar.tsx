"use client"
import Link from 'next/link'
import { Button } from './ui/button'
import { Ham, Hamburger, Menu, Sun } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Navbar() {
    const [menu, showMenu] = useState<boolean>(false)
    console.log(menu)
  return (
    <nav className='max-w-7xl flex sm:mx-auto justify-between max-sm:w-full max-sm:justify-between sm:items-center my-4 border rounded-2xl sm:px-10 max-sm:px-4  py-4'>
        <h1 className='w-1/2 max-sm:w-fit max-sm:h-fit capitalize font-bold text-xl tracking-wide cursor-pointer'>bain<span className='bg-bainiac rounded-md px-2 py-1.5 text-white'>iac</span></h1>
        <div className="contents max-sm:hidden">

            <ul className='w-1/3 max-md:w-full flex capitalize items-center justify-center'>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>about</Link>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>subjects</Link>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>contact</Link>
            </ul>

            <div className="w-1/3 flex items-center justify-evenly">
                <Button className='bg-primary cursor-pointer p-6 capitalize border-2 border-transparent hover:text-primary hover:bg-transparent hover:border-primary ease-in-out duration-500'>dashboard</Button>
                {/* <Button className=''><Sun /></Button> */}
                <ThemeToggle />
            </div>
        </div>

        <Button className='sm:hidden cursor-pointer py-5 px-4 order-2 border-2 border-black dark:border-primary bg-transparent text-primary' onClick={() => showMenu(!menu)}><Menu className='size-5'/></Button>
        <div className={`w-screen flex flex-col sm:hidden items-center mt-10 justify-center ease-in-out duration-500 max-h-0 overflow-clip ${menu ? "max-sm:min-h-[40vh] j" : "max-sm:min-h-0 max-sm:max-w-0"}`}>
            <ul className='w-full flex flex-col capitalize items-center justify-center'>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>about</Link>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>subjects</Link>
                <Link href="#" className='py-4 rounded-2xl hover:bg-bainiac capitalize border-2 border-transparent hover:border-black dark:hover:border-primary ease-in-out duration-500 cursor-pointer w-full text-center'>contact</Link>
            </ul>

            <div className="w-full flex flex-col items-center justify-evenly">
                <Button className='bg-primary cursor-pointer p-6 w-full capitalize border-2 border-transparent hover:text-primary hover:bg-transparent hover:border-primary ease-in-out duration-500'>dashboard</Button>
                {/* <Button className=''><Sun /></Button> */}
                <ThemeToggle />
            </div>
        </div>


    </nav>
  )
}
