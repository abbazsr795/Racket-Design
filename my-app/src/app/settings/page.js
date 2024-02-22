"use client"

import {Pane, Tab, Tablist} from "evergreen-ui";
import useStore from "@/app/store.js";

//Requires Evergeen-UI and state (Zustand in this case)

export default function MyAccount(){

    const tabs = ["Privacy", "Security", "Payment", "Ownership"]

    const SelectedTab = useStore((state) => state.selectedTab)
    const SetSelectedTab = useStore((state) => state.changeSelectedTab)

    return(
        // Component is horizontally centered by default in the layout.js page with a top margin
        <div className="m-5 md:w-9/12 border border-1">
            {/* Below all are Evergreen-UI components */}
            <Pane className="md:flex">
                <Tablist marginTop={20} marginLeft={20} marginBottom={16} flexBasis={240} marginRight={24}>
                    {tabs.map((tab, index) => {
                    return (
                        <Tab
                        // appearance="minimal"
                        aria-controls={`panel-${tab}`}
                        direction="vertical"
                        isSelected={index === SelectedTab}
                        key={tab}
                        onSelect={() => SetSelectedTab(index)}
                        >
                        <p className="text-lg">{tab}</p>
                        </Tab>
                    )
                    })}
                </Tablist>
                <Pane padding={16} flex="1">
                    {tabs.map((tab, index) => (
                    <Pane
                        aria-labelledby={tab}
                        aria-hidden={index !== SelectedTab}
                        display={index === SelectedTab ? 'block' : 'none'}
                        key={tab}
                        role="tabpanel"
                    >
                        <p className="text-3xl flex flex-row justify-center">{tab}</p>
                        <br></br>
                        {tab === "Privacy" ? <p>USS Gyatt (DD-712/DDG-1/DDG-712) was a Gearing-class destroyer in service with the United States Navy. The ship was named for Edward Earl Gyatt, a United States Marine Corps private and Marine Raider who was killed during the Battle of Guadalcanal.[1] Laid down in 1944,[2] the destroyer was commissioned in 1945 and missed combat during the Second World War. In 1955, she was converted into a guided missile destroyer (DDG) and served to test onboard missile systems before she was decommissioned and sunk as a target in 1970.</p> : <></>}
                    </Pane>
                    ))}
                </Pane>
            </Pane>
        </div>
    )
}