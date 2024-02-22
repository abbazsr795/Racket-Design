"use client"

import Image from "next/image"
import { Popover, Position, Menu, Button, toaster } from "evergreen-ui"
import ExpandIcon from "../{icons}/menu-icon-1.png"

//The Header utilises both this page and the layout page for it positioning

export default function Header (){
    return(
        <div className="fixed left-0 right-0 top-0 w-screen bg-white">
            <div className="flex flex-row justify-between md:justify-around items-center py-3 px-5">
               <p className="font-bold text-xl">AbbazsJS</p>
               <div className="md:hidden">
                    {/* Requires Popover, Position, Menu, Button, toaster from Evergreen-UI */}
                    <Popover
                    position={Position.BOTTOM_LEFT}
                    content={
                        <Menu>
                        <Menu.Group>
                            <Menu.Item onSelect={() => toaster.notify('Share')}>Share...</Menu.Item>
                            <Menu.Item onSelect={() => toaster.notify('Move')}>Move...</Menu.Item>
                            <Menu.Item onSelect={() => toaster.notify('Rename')} secondaryText="⌘R">
                            Rename...
                            </Menu.Item>
                        </Menu.Group>
                        <Menu.Divider />
                        <Menu.Group>
                            <Menu.Item onSelect={() => toaster.danger('Delete')} intent="danger">
                            Delete...
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
                        <button className="text-slate-500 hover:text-black">Docs</button>
                        <button className="text-slate-500 hover:text-black">Github</button>
                        <button className="text-slate-500 hover:text-black">LinkedIn</button>
                    </div>
               </div>
            </div>
        </div>
    )
}