"use client"

import "../globals.css"

//The footer utilises both this page and the layout page for it positioning

export default function Footer (){
    return(
        <div className="p-2 flex flex-row justify-center bg-white">
            <div>
                <p className="flex flex-row justify-center font-bold text-lg">RacketJS</p>
                <p className="flex flex-row justify-center">© 2024 Racket Labs Inc. All rights reserved..</p>
            </div>
        </div>
    )
}