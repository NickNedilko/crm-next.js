import React from "react";
import Sidebar from "../components/sidebar";
import SidebarItem from "../components/sidebar-item";


interface LayoutProps {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
console.log('rendering')


    return(
        <div>
            <Sidebar/>
            <div className="ml-60">
              {children}
            </div>
             
        </div>
    )
}