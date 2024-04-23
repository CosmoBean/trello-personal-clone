
'use client'
import '@/app/globals.css'
import Image from 'next/image'
import {useSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
const SignInPage = () => {
  const {data: session} = useSession();
  if (session) {
    redirect('/board')
  }
  return (
    <header>
    
        <div className="flex flex-col md:flex-row items-center justify-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div 
            className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-br
            from-[#0055D1]
            to-pink-400
            rounded-md
            filter
            opacity-50
            blur-3xl
            -z-50
            "
        />
        <Image 
        src={"https://github.com/CosmoBean/image-assets/blob/master/personal-trello-clone/Trello_logo.png?raw=true"}
        alt="Trello Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
    </div>

    <div className="flex items-center justify-center h-96">
      <div className="p-12 bg-white rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign In</h2>
        <button 
          className="bg-stone-950 text-white p-3 rounded-md w-full hover:bg-blue-600"
          onClick={() => signIn('google')}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google sign-in"
            height={200}
            width={300}
            className="w-5 h-5 mr-3 inline"
          />
          Sign in with Google
        </button>
      </div>
    </div>
    </header>
  )
}

export default SignInPage