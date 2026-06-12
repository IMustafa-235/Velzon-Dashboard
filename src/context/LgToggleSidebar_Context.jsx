import { createContext, useState } from "react";

export const lgToggleSidebar_Context = createContext()


const LgToggleSidebar_provider = ({children})=>{
    const [lgToggleSidebar, setLgToggleSidebar] = useState(true)
    return(
        <lgToggleSidebar_Context.Provider value={{lgToggleSidebar, setLgToggleSidebar}}>
            {children}
        </lgToggleSidebar_Context.Provider>
    )
}
export default LgToggleSidebar_provider