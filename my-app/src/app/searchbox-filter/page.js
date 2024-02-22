"use client"

import React from "react";
import SearchIcon1 from "@/app/{icons}/search-icon-1.png"
import Image from "next/image";
import { Checkbox } from "evergreen-ui";

export default function SearchBox(){
    return(
        // Component is horizontally centered by default in the layout.js page with a top margin
        <div className="w-2/6 min-w-fit border bprder-1 p-5 m-2 pb-1 rounded">
            <div className="w-full flex flex-row items-center gap-3">
                {/* <p className="text-md">Text</p> */}
                {/* Uses Next Image component */}
                <Image src={SearchIcon1} width={30}></Image>
                {/* Uses global.css for removing blue default outline when focus */}
                <input maxLength={100} className="border-solid border-slate-300 rounded border p-1 w-full"></input>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-slate-300 hover:border-slate-400 rounded p-2 w-fit text-sm">Search</button>
                </div>
            </div>
            <div className="flex flex-row gap-3 flex-wrap">
                <Checkbox
                label="Filter 1"
                ></Checkbox>
                <Checkbox
                label="Filter 2"
                ></Checkbox>
            </div>
        </div>
    )
}