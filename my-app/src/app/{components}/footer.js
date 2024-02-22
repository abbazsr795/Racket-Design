"use client"

import "../globals.css"

//The footer utilises both this page and the layout page for it positioning

export default function Footer (){
    return(
        <div className="bg-white rounded p-2 flex flex-row justify-center text-black footer">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center"><p className="font-bold text-lg">Abbazs Rahman</p></div>
                <div className="flex flex-row justify-center"><p>Since 2004. All rights reserved.</p></div>
            </div>
        </div>
    )
}