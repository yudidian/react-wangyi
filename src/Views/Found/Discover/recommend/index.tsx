import {SwiperSlide,Swiper} from 'swiper/react'
import HotRecommend from "./HotRecommend/HotRecommend";
import NewSongs from "./newSongs/newSongs";
import style from './recommend.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SongList from "./songList/songList";
import {Autoplay, Navigation, Pagination} from "swiper";
export default function Recommend() {
    return (
        <div>
            <Swiper
                className={style.recommendSwiper}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl:'swiper-button-prev',
                    prevEl:'swiper-button-next'
                }}
                pagination={{clickable: true}}
                autoplay={
                    {delay: 3000}
                }
            >
                <SwiperSlide className={style.recommendSlide}>
                    <img style={{width: "980px", height: "285px"}}
                         src="https://p1.music.126.net/MaNdXmVeRpVYDssUt_Usxg==/109951167194954805.jpg?imageView&quality=89"
                         alt=""/>
                </SwiperSlide>
                <SwiperSlide className={style.recommendSlide}>
                    <img style={{width: "980px", height: "285px"}}
                        src="https://p1.music.126.net/MaNdXmVeRpVYDssUt_Usxg==/109951167194954805.jpg?imageView&quality=89"
                        alt=""/>
                </SwiperSlide>
                <SwiperSlide className={style.recommendSlide}>
                    <img style={{width: "980px", height: "285px"}}
                        src="https://p1.music.126.net/MaNdXmVeRpVYDssUt_Usxg==/109951167194954805.jpg?imageView&quality=89"
                        alt=""/>
                </SwiperSlide>
                <div className={`${style["btn-prev"]} swiper-button-prev`}></div>
                <div className={`${style["btn-next"]} swiper-button-next`}></div>
            </Swiper>
            <div className={style.content}>
                <div className={style.left}>
                    <HotRecommend/>
                    <NewSongs/>
                    <SongList/>
                </div>
                <div className={style.right}>

                </div>
            </div>
        </div>
    );
};
