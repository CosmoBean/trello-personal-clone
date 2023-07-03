"use client";
import Header from "@/components/Header";
import '@/app/globals.css'
import Board from "@/components/Board";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const {data: session} = useSession({
    required:true,
    onUnauthenticated() {
      redirect('/signin')
    }
  });
  return (
    <main>
      <Header />
      <Board />
    </main>
  )
}
