import React from "react";

export default function Buttons(){
    return(
        <div className="md:w-2/4 w-fit">
            <div className="border border-1 p-10 m-2 rounded">
                <p className="flex flex-row justify-center text-2xl">Danger Button</p>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-red-300 hover:border-red-600 rounded px-3 py-2 w-fit text-md text-red-400 hover:text-red-600">Continue</button>
                </div>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-red-300 hover:border-red-600 rounded px-3 py-2 w-full text-md text-red-400 hover:text-red-600">Continue</button>
                </div>
            </div>
            <br></br>
            <div className="border border-1 p-10 m-2 rounded">
                <p className="flex flex-row justify-center text-2xl">Normal Button</p>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-fit text-md text-slate-600 hover:text-slate-400">Continue</button>
                </div>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-full text-md text-slate-600 hover:text-slate-400">Continue</button>
                </div>
            </div>
            <br></br>
            <div className="border border-1 p-10 m-2 rounded">
                <p className="flex flex-row justify-center text-2xl">Success Button</p>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-green-600 hover:border-green-500 rounded px-3 py-2 w-fit text-md text-green-600 hover:text-green-500">Continue</button>
                </div>
                <br></br>
                <div className="flex flex-row justify-center">
                    <button className="border border-1 border-green-600 hover:border-green-500 rounded px-3 py-2 w-full text-md text-green-600 hover:text-green-500">Continue</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}