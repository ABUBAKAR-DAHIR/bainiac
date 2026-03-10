import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="max-w-7xl max-xl:px-10 mx-auto mt-32 flex flex-col gap-16">

      {/* Title */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Contact <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">Bainiac</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Have questions about tutoring, classes, or KCSE preparation?  
          Send a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-6 lg:border-2 lg:p-8 lg:rounded-2xl">

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input placeholder="Enter your name" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="What is this about?" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea
            placeholder="Write your message..."
            className="min-h-[120px]"
          />
        </div>

        <Button className="relative w-full py-8 capitalize text-md cursor-pointer border-2 border-black bg-transparent dark:border-white overflow-hidden text-black dark:text-white  group max-sm:w-full ">
        
            <span className="relative z-10">get started</span>

            <span
                className="absolute left-[-40%] top-1/2 -translate-y-1/2
                h-[120%] w-[40%]
                rounded-full bg-bainiac blur-2xl
                transition-transform duration-700
                group-hover:translate-x-[250%]"
            ></span>

        </Button>

      </div>

      {/* Extra contact info */}
      <div className="text-center flex flex-col gap-2 text-muted-foreground">
        <p>You can also reach us directly at:</p>
        <p className="font-medium text-foreground">support@techfryz.com</p>
      </div>

    </section>
  )
}