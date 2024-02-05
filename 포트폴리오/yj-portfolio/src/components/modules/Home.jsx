import React from "react";
import MyImage from "../../assets/myImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="h-[70vh] w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
                
                <div>
                    <img src={MyImage} alt="my profile" className="md:rounded-[50%] md:pt-8 pt-32 pb-4 max-w-[170%] w-[170%]" />
                </div>
                <div className="flex flex-col justify-center md:h-full">
                    <h2 className="text-3xl sm:text-7xl font-bold text-white">
                        신용진 Portfolio
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        현대적이고 직관적인 사용자 인터페이스를 구현하는 데 열정을 쏟고 있습니다. 최신 웹 기술에 관심이
                        많아, HTML, CSS, JavaScript, React를 능숙하게 다루며, 새로운 트렌드에 빠르게 적응하는 능력을 가지고
                        있습니다. 사용자 중심의 웹 애플리케이션을 개발하여 팀과 함께 혁신적인 솔루션을 창출하고자
                        합니다.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="ground-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
