import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="">
                    <h2>I'm a Frontend Developer</h2>
                    <p>설명</p>
                    <div className="">
                        <button>
                            Portfolio
                            <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={HeroImage} alt="my profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;
