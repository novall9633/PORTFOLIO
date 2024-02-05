import { pCon } from "../modules/pContext"
import { MainArea } from "./MainArea"
export function Layout(){
    return(
        <pCon.Provider >
            <MainArea />
        </pCon.Provider>
    )
}