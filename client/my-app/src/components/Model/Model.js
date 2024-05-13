"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState,useEffect } from "react"
import Image from "next/image";




export function Model() {
  const [result, setResult] = useState();
const [comment, setComment] = useState()
const predictBtn =async ()=>{
    const todo = { comment };
    console.log("hi")
    console.log(todo)
    const response = await fetch("http://127.0.0.1:8080/api/res", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(todo)
    })
    if (response.ok){
    console.log("it worked")
    const data = await response.json();
    setResult(data.message);
    console.log(data);

    }


}
  return (
    (<div className="flex flex-col min-h-[100dvh] dark:bg-gray-950">
      <header
        className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-gray-50" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-50">
                  Deciphering the Language of Emotion
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                Unveiling Sentiments with Text Emotion Detection by harnessing the power of NLP
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-800 bg-gray-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                  href="#">
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/Images/bg.png"
              width="550" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-50">Search for Images</h2>
              <p className="text-gray-400">Enter a keyword and we'll display a relevant image.</p>
            </div>
            <form className="grid gap-4">
              <div>
                <Label className="text-base text-gray-50" htmlFor="search">
                  Keyword
                </Label>
                <Input className="mt-1" value={comment} onChange={e =>setComment(e.target.value)} id="search" placeholder="Enter a keyword" />
              </div>
           
              <Button className="w-full"  type="button" value="input" onClick={predictBtn}>
                Search
              </Button>
            </form>
            <div style={{ textAlign: "center" }}>
  <h2 className="text-3xl font-bold text-gray-50">{result}</h2>
  <div style={{ width: "100%", textAlign: "center" }}> {/* Parent container */}
    <img
      alt="Search Result"
      className="rounded-lg object-cover"
      height="300"
      src={`/Images/${result}.png`}
      style={{
        maxWidth: "100%", // Ensure that the image doesn't exceed its natural size
        height: "auto", // Allow the image to adjust its height proportionally
        width: "auto", // Allow the image to adjust its width proportionally
        objectFit: "contain", // Preserve the aspect ratio while fitting the image within its container
        margin: "0 auto", // Center the image horizontally within its container
      }}
    />
  </div>
</div>

          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <ClipboardIcon className="h-12 w-12 text-gray-400" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-50">Streamlined Workflows</h3>
                <p className="text-gray-400">Automate repetitive tasks and focus on what matters most.</p>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <BoldIcon className="h-12 w-12 text-gray-400" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-50">Blazing Fast Performance</h3>
                <p className="text-gray-400">Deliver lightning-fast experiences for your users.</p>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <ShieldIcon className="h-12 w-12 text-gray-400" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-50">Enterprise-Grade Security</h3>
                <p className="text-gray-400">Keep your data safe with our robust security measures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-950">
        <p className="text-xs text-gray-400">© 2024 Mayaank Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
            href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function BoldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>)
  );
}


function ClipboardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function ShieldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>)
  );
}
