import { useCallback, useLayoutEffect } from "react"
import { pCon } from "../modules/pContext"
import { MainArea } from "./MainArea"
import { useNavigate } from "react-router-dom";
export function Layout(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    });

    const goNav = useNavigate();
    const chgPage = useCallback((pgName,param) => goNav(pgName,param),[]);

    return(
        <pCon.Provider value={{chgPage}}>
            <MainArea />
        </pCon.Provider>
    )
}