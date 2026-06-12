import { createContext, useState } from "react";

export const Sidebar_Context = createContext()

const Sidebar_Provider = ({children})=>{
    const [sidebar, setSidebar] = useState(false)
    const [sidebarBgChange, setSidebarBgChange] = useState("sidebar-dark")
    return(
        <Sidebar_Context.Provider value={{setSidebar, sidebar, sidebarBgChange, setSidebarBgChange}}>
            {children}
        </Sidebar_Context.Provider>
    )
}
export default Sidebar_Provider