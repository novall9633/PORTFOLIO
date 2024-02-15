import React from "react";

export function About(){
    return (
        <div name="about" className="w-full h-[60vh] bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <b className="text-xl"><i>* </i>경력</b>
                <p className="text-xl"><i>- </i> 2020.12 ~ 2023.07 RPA 개발자</p>
                <br/>
                <b className="text-xl"><i>* </i>교육</b>
                <p className="text-xl"><i>- </i> 2023.07 ~ 2024.01 프론트엔드(React,PHP), 플러터 활용 웹&앱 개발 양성과정</p>
                <p className="text-xl"><i>- </i> 2020.04 ~ 2020.11 Java언어 기반의 스마트웹 Full-Stack 개발자 양성과정</p>
            </div>
        </div>
    );
};

