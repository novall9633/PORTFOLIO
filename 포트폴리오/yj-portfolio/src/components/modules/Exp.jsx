import React from "react";
import { expData } from "../../data/expData";
import { Link } from "react-router-dom";
import { SwiperPro } from "../plugin/SwiperPro";

export function Exp({ cat }) {
    return (
        <div name={cat} className="bg-gradient-to-b from-black to-gray-800 text-white w-full pt-20">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-around h-full px-4">
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">프로젝트 소개</p>
                    <p className="py-6">{expData[cat].intro}</p>
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">기술 스택</p>
                    <p className="py-6">{expData[cat].stack}</p>
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">개발 과정</p>
                    {expData[cat].develop.map(({ sub, exp }) => {
                        return (
                            <>
                                <p className="text-2xl font-bold py-4">{sub}</p>
                                <p className="">{exp}</p>
                            </>
                        );
                    })}
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">결과물</p>
                    <SwiperPro cat={cat} />
                    {/* <p className="py-6">{expData[cat].result}</p> */}
                </div>
            </div>
        </div>
    );
}
