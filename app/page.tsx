import Header from "@/components/Header";
import '@/app/globals.css'
import Board from "@/components/Board";

export default function Home() {
  return (
    <main>
      <Header />
      
      <h1 className="flex justify-center p-5">trello-personal-clone</h1>
      <Board />
    </main>
  )
}
