import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export function SocialLinks(){
    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/novall9633",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:novall9633@naver.com",
        },
        {
            id: 3,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, child, href, style, download}) => {
                    return(
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                        <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                )})}
            </ul>
        </div>
    );
};

