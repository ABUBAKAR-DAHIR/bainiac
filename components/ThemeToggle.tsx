"use client"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {

  const {setTheme, theme} = useTheme()
  return (
    <Button className='cursor-pointer p-6 max-sm:w-full capitalize border-2 border-transparent hover:text-primary hover:bg-transparent hover:border-primary ease-in-out duration-500' onClick={() => setTheme((prev) => prev === "light" ? "dark" : "light")}>
        {
            theme == "light" ? <Moon /> : <Sun />
        }
    </Button>
  )
}
