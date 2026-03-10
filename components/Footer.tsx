import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-32">

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Bainiac
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping students prepare for KCSE through clear explanations,
              structured revision, and focused exam preparation.
            </p>
          </div>


          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Quick Links</h3>

            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </Link>

            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>

            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>

            <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground transition">
              Courses
            </Link>
          </div>


          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Contact</h3>

            <p className="text-sm text-muted-foreground">
              support@techfryz.com
            </p>

            <p className="text-sm text-muted-foreground">
              Available for KCSE tutoring and academic support.
            </p>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bainiac. All rights reserved.
        </div>

      </div>

    </footer>
  )
}