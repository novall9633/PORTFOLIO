import React from "react";
import { expData } from "../../data/expData";

const Explanation = ({ cat }) => {
    return (
        <div name={cat} className="bg-gradient-to-b from-black to-gray-800 text-white w-screen h-screen">
            <div className="py-8 px-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">프로젝트 소개</p>
                <p className="py-6">{expData.bowling.intro}</p>
            </div>
            <div className="py-8 px-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">개발 과정</p>
                <p className="py-6">{expData.bowling.intro}</p>
            </div>
            <div className="py-8 px-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">기술 스택</p>
                <p className="py-6">{expData.bowling.intro}</p>
            </div>
        </div>
    );
};

export default Explanation;
