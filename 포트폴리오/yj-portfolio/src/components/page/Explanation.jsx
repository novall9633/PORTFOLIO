import React from "react";
import { Exp } from "../modules/Exp";
import { NavBar } from "../modules/NavBar";
import { SocialLinks } from "../modules/SocialLinks";

export function Explanation(props) {
    return (
        <>
            <NavBar cat="exp" />
            <Exp cat={props.cat} />
            <SocialLinks />
        </>
    );
}
