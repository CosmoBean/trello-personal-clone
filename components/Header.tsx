"use client";

import Image from "next/image"
import {MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid"
import Avatar from "react-avatar"
import { useBoardStore } from "@/store/BoardStore";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchSuggestionHelper } from "@/utils/fetchSuggestionHelper";

function Header() {
  const [searchString, setSearchString, board] = useBoardStore((state)=> [state.searchString, state.setSearchString, state.board]);

  const handleSearchTermChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearchString(e.target.value)
  };

  const [loading, setLoading] = useState<Boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(()=>{
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestion = async () => {
      const suggestion = await fetchSuggestionHelper(board);
      setSuggestion(suggestion);
      setLoading(false);
    }

    fetchSuggestion();

  },[board])

  return (
    <header>
    
        <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div 
            className="
            absolute
            top-0
            left-0
            w-full
            h-96
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
    
    <div className="flex items-center space-x-5 flex-1 justify-end w-full">
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600"/>
            <input type="text" value={searchString} placeholder="Search" className="flex-1 outline-none p-2" onChange={(e)=>handleSearchTermChange(e)}/>
            <button type="submit" hidden>Search</button>
        </form>

        <Avatar name="Cosmo Bean" round size="50" color="#0055D1"/>

    </div>
    </div>

    <div className="flex items-center justify-center px-5 py-2 md:py-5">
      <p className="flex items-center p-5 pr-5 text-sm font-light shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
        <UserCircleIcon color="#0055D1" className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${loading && "animate-spin"}`} />
        {suggestion && !loading
        ? suggestion
        :"Please wait, as we summarize your tasks for the day...."}
      </p>
    </div>
    </header>
  )
}

export default Header