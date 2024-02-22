"use client"

import React from "react";
import { Checkbox } from "evergreen-ui";

export default function SignIn(){
    return(
        // Component is horizontally centered by default in the layout.js page with a top margin
        <div className="border border-1 p-10 m-2 rounded w-2/6 min-w-fit">
            <p className="flex flex-row justify-center text-2xl">Sign In</p>
            <br></br>
            <p className="text-md">Email</p>
            {/* Uses global.css for removing blue default outline when focus */}
            <input maxLength={100} className="border-solid border-slate-300 rounded border p-1 w-full"></input>
            <br></br>
            <br></br>
            <p className="text-md">Password</p>
            {/* Uses global.css for removing blue default outline when focus */}
            <input maxLength={100} type={"password"} className="border-solid border-slate-300 rounded border p-1 w-full"></input>
            {/* Requires Evergreen-UI */}
            <Checkbox
            label="Show password"
            />
            <br></br>
            <a href="/signup" className="text-xs flex flex-row justify-center hover:underline">Not a user? Create one!</a>
            <br></br>
            <div className="flex flex-row justify-center">
                <button className="border border-1 border-slate-300 hover:border-slate-400 rounded px-3 py-2 w-fit text-md">Continue</button>
            </div>
        </div>
    )
}