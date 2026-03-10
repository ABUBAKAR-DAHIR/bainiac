import React from 'react'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section className="max-w-7xl max-xl:px-10 mx-auto mt-32 flex flex-col gap-16 mb-20">

      {/* Title */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">
          About <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">Bainiac</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          Bainiac is a dedicated KCSE tutoring platform focused on helping students
          prepare effectively for their examinations through clear explanations,
          structured revision, and personalized guidance.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>

        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Our mission is to help students build strong understanding in their
          subjects, gain confidence in tackling KCSE questions, and achieve
          excellent results through focused learning and proper exam preparation.
        </p>
      </div>

      {/* Teaching Approach */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Clear Explanations</h3>
          <p className="text-muted-foreground">
            Difficult topics are broken down into simple concepts so students can
            understand them quickly and effectively.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">KCSE Practice</h3>
          <p className="text-muted-foreground">
            Students work through past KCSE questions and exam-style problems to
            build familiarity and confidence.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Exam Strategies</h3>
          <p className="text-muted-foreground">
            Learn practical techniques that help maximize marks and improve
            performance during exams.
          </p>
        </div>

      </div>

      {/* Call to action */}
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Start Preparing for KCSE Today
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto">
          With the right guidance and consistent practice, success in KCSE is
          achievable. Begin your preparation today.
        </p>

        <div className="w-full items-center justify-center flex gap-4 mt-4 max-md:items-center max-md:justify-center max-sm:flex-col">
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

    </section>
  )
}