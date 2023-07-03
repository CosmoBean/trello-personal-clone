"use client";
import '@/app/globals.css'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const {data: session} = useSession();
  if (session) {
    redirect('/board')
  }else {
    redirect('/signin')
  }
  
}
