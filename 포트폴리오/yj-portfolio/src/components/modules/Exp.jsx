import React from "react";
import { expData } from "../../data/expData";

export function Exp({ cat }) {
    return (
        <div name={cat} className="bg-gradient-to-b from-black to-gray-800 text-white w-full pt-20">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-around h-full px-4">
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        프로젝트 명/{expData[cat].pj === "개인" ? "개인 프로젝트" : "단체 프로젝트"}
                    </p>
                    <p className="py-6 text-2xl">{expData[cat].subject}</p>
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">프로젝트 소개</p>
                    <p className="py-6 text-xl">{expData[cat].intro}</p>
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">개발 기술</p>
                    <ul className="flex gap-3 flex-wrap">
                        {expData[cat].stack.map((v, i) => {
                            return (
                                <li className="my-4 h-8 px-1 border-2 rounded-lg text-xl" key={i}>
                                    {v}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="py-8 px-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">결과물</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {expData[cat].result.map((v, i) => {
                        return (
                            <div key={i} className="hover:scale-105 duration-500 py-2 rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/" + cat + "/" + v + ".png"} alt="" />
                            </div>
                        );
                    })}
                </div>
                <div className="py-8 px-8">
                    <button
                        className="py-3 m-3 duration-200 hover:scale-105 text-4xl font-bold"
                        onClick={() => {
                            window.open(expData[cat].link, cat);
                        }}
                    >
                        사이트 바로가기
                    </button>
                </div>
            </div>
        </div>
    );
}
