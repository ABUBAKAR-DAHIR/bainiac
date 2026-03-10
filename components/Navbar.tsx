import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='max-w-7xl flex mx-auto bg-amber-700 justify-between items-center'>
        <h1 className='flex-1/2'>bain <span>iac</span></h1>

        <ul className='flex justify-evenly flex-1/2 bg-red-700'>
            <Link href="#" className='py-10'>about</Link>
            <Link href="#" className='py-10'>subjects</Link>
            <Link href="#" className='py-10'>dashboard</Link>
        </ul>

        <Button>dfd</Button>


    </nav>
  )
}
