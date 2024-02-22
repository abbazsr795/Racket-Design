"use client"

import "../globals.css"

//The footer utilises both this page and the layout page for it positioning

export default function Footer (){
    return(
        <div className="p-2 flex flex-row justify-center bg-white">
            <div>
                <p className="flex flex-row justify-center font-bold text-lg">Abbazs Rahman</p>
                <p className="flex flex-row justify-center">Since 2004. All rights reserved.</p>
            </div>
        </div>
    )
}