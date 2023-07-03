"use client";
import Header from "@/components/Header";
import '@/app/globals.css'
import Board from "@/components/Board";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {data: session} = useSession();
  if (session) {
  return (
    <main>
      <Header />
      <Board />
    </main>
  )
  }else {
    return(
      <Link href="/signin">SignIn</Link>
    )
  }
}
