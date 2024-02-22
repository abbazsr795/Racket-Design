"use client"

import Image from "next/image"
import { Popover, Position, Menu, Button, toaster } from "evergreen-ui"
import ExpandIcon from "../{icons}/menu-icon-1.png"
import { useRouter } from "next/navigation"

//The Header utilises both this page and the layout page for it positioning

export default function Header (){

    const {push} = useRouter()

    return(
        <div className="fixed left-0 right-0 top-0 w-screen bg-white">
            <div className="flex flex-row justify-between md:justify-around items-center py-3 px-5">
               <button onClick={()  => push("/")} className="font-bold text-xl">AbbazsJS</button>
               <div className="md:hidden">
                    {/* Requires Popover, Position, Menu, Button, toaster from Evergreen-UI */}
                    <Popover
                    position={Position.BOTTOM_LEFT}
                    content={
                        <Menu>
                        <Menu.Group>
                            <Menu.Item onClick={()  => push("https://github.com/abbazsr795/reusable-components")}>Docs</Menu.Item>
                            <Menu.Item onClick={()  => push("https://github.com/abbazsr795")}>GitHub</Menu.Item>
                            <Menu.Item onClick={() => push("https://www.linkedin.com/in/abbazs-rahman-968b65260/")}>LinkedIn</Menu.Item>
                        </Menu.Group>
                        <Menu.Divider />
                        <Menu.Group>
                            <Menu.Item onSelect={() => toaster.notify('Divider Button')} intent="danger">
                            Button
                            </Menu.Item>
                        </Menu.Group>
                        </Menu>
                    }
                    >
                    <Button appearance="minimal"> 
                        <Image alt="Expand Icon" width={20} src={ExpandIcon}></Image>
                    </Button>
                    </Popover>
               </div>
               <div className="md:block hidden">
                    <div className="flex flex-row gap-5">
                        {/* Uses global.css for removing default button styling */}
                        <button onClick={()  => push("https://github.com/abbazsr795/reusable-components")} className="text-slate-500 hover:text-black">Docs</button>
                        <button onClick={()  => push("https://github.com/abbazsr795")} className="text-slate-500 hover:text-black">GitHub</button>
                        <button onClick={() => push("https://www.linkedin.com/in/abbazs-rahman-968b65260/")} className="text-slate-500 hover:text-black">LinkedIn</button>
                    </div>
               </div>
            </div>
        </div>
    )
}