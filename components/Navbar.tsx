import Link from 'next/link'
import { Button } from './ui/button'
import { Sun } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='max-w-7xl flex mx-auto justify-between items-center my-4 border rounded-2xl px-10'>
        <h1 className='w-1/2 capitalize font-bold text-xl tracking-wide'>bain<span className='bg-primary rounded-xl px-2 py-1'>iac</span></h1>

        <ul className='w-1/3 flex capitalize items-center justify-center'>
            <Link href="#" className='py-10 hover:bg-amber-400 w-full text-center'>about</Link>
            <Link href="#" className='py-10 hover:bg-amber-400 w-full text-center'>subjects</Link>
            <Link href="#" className='py-10 hover:bg-amber-400 w-full text-center'>contact</Link>
        </ul>

        <div className="w-1/3 flex items-center justify-evenly">
            <Button className=''>dashboard</Button>
            <Button className=''><Sun /></Button>
        </div>


    </nav>
  )
}
