import {SwiperSlide, Swiper} from 'swiper/react'
import style from './newSongs.module.scss'
import './newSongs.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from "swiper";

export default function NewSongs() {
    return (
        <div className={style.newSongs}>
            <div className={style.header}>
                <ul className={style.list}>
                    <li className={style.bcImage}></li>
                    <li className={style["list-item"]}>新碟上架</li>
                    <li className={`${style.more} ${style["list-item"]}`}>更多</li>
                </ul>
            </div>
            <div className={style.content}>
                <Swiper className={style.newSongSwiper}
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl:'swiper-button-next',
                            prevEl:'swiper-button-prev'
                        }}
                        pagination={{clickable: true}}
                        autoplay={
                            {delay: 3000}
                        }
                >
                    <SwiperSlide className={style.swipeSlide}>
                        <ul>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide className={style.swipeSlide}>
                        <ul>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                            <li className={style.swiperItem}>
                                <img
                                    src="https://p4.music.126.net/KB_i1txqX5Sx2TjqJIBaWQ==/109951167132155825.jpg?param=100y100"
                                    alt=""/>
                                <p className={style.songName}>xxxxx</p>
                                <p className={style.author}>xxxx</p>
                            </li>
                        </ul>
                    </SwiperSlide>
                    <div className={`${style["btn-prev"]} swiper-button-prev`}></div>
                    <div className={`${style["btn-next"]} swiper-button-next`}></div>
                </Swiper>
            </div>
        </div>
    );
};
