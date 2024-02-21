import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { pCon } from "./pContext";
import { Link as RLink } from "react-router-dom";

export function NavBar({ cat }) {
    const myCon = useContext(pCon);
    const [nav, setNav] = useState(false);

    const mLinks = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];
    const sLinks = [
        {
            id: 1,
            link: "/bowling",
            txt: "Bowling",
        },
        {
            id: 2,
            link: "/nexis",
            txt: "Nexis",
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl font-signature ml-2 cursor-pointer" onClick={() => myCon.chgPage("/", {})}>
                    YongJin
                </h1>
            </div>

            <ul className="hidden md:flex">
                {cat === "main" &&
                    mLinks.map(({ id, link }) => {
                        return (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                {cat === "exp" &&
                    sLinks.map(({ id, link, txt }) => {
                        return (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
                            >
                                <RLink to={link}>{txt}</RLink>
                            </li>
                        );
                    })}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && cat === "main" && (
                <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {mLinks.map(({ id, link }) => {
                        return (
                            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">
                                <Link
                                    to={link}
                                    smooth
                                    duration={500}
                                    onClick={() => {
                                        setNav(!nav);
                                    }}
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
            {nav && cat === "exp" && (
                <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {sLinks.map(({ id, link, txt }) => {
                        return (
                            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">
                                <RLink
                                    to={link}
                                    smooth
                                    duration={500}
                                    onClick={() => {
                                        setNav(!nav);
                                    }}
                                >
                                    {txt}
                                </RLink>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
