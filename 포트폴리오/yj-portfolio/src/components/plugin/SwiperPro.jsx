import { Swiper, SwiperSlide } from "swiper/react";
import "./css/swiper.css";
// Import Swiper styles
import "swiper/css";
// 양쪽 이동버튼만 필요함
import 'swiper/css/navigation';
export function SwiperPro() {
    return (
        <>
            <Swiper spaceBetween={20} navigation={true}></Swiper>
        </>
    );
}
