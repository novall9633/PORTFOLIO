import React, { useContext } from "react";
import { pCon } from "./pContext";

export function Portfolio(){
    const myCon = useContext(pCon);
    const portfolios = [
        {
            id: 1,
            isrc: process.env.PUBLIC_URL+"/images/projects/bowling.PNG",
            src: "bowling",
            link: "/bowling",
            demoLink:
                "https://novall9633.github.io/FED-RF-2023-Project-SYJ/1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/index.html",
            codeLink:
                "https://github.com/novall9633/FED-RF-2023-Project-SYJ/tree/main/1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4",
        },
        {
            id: 2,
            isrc: process.env.PUBLIC_URL+"/images/projects/nexis.PNG",
            src: "nexis",
            link: "/nexis",
            demoLink: "https://novall9633.github.io/syj-react-pj/",
            codeLink: "https://github.com/novall9633/syj-react-pj",
        },
    ];

    

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-flow-col-2 md:grid-cols-2 gap-8 px-12 sm:px-8">
                    {portfolios.map(({ id, isrc, src, link, demoLink, codeLink }) => {
                        return (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={isrc} alt="portfolio" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button
                                        className="w-1/3 px-3 py-3 m-3 duration-200 hover:scale-105"
                                        onClick={() => {
                                            window.open(demoLink, src);
                                        }}
                                    >
                                        Demo
                                    </button>
                                    <button
                                        className="w-1/3 px-3 py-3 m-3 duration-200 hover:scale-105"
                                        onClick={() => {
                                            window.open(codeLink, src);
                                        }}
                                    >
                                        Code
                                    </button>
                                    <button className="w-1/3 px-3 py-3 m-3 duration-200 hover:scale-105"
                                    onClick={()=>myCon.chgPage(link,{})}>
                                        Exp
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

