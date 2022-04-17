import {SwiperSlide, Swiper} from 'swiper/react'
import HotRecommend from "./HotRecommend/HotRecommend";
import NewSongs from "./newSongs/newSongs";
import style from './recommend.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SongList from "./songList/songList";
import {Autoplay, Navigation, Pagination} from "swiper";
import {useEffect,useState} from 'react'
import {homepageInfo} from '../../../../axios/api'

export default function Recommend() {
    const [homeInfo,setHomeInfo] = useState<any>([])
    useEffect(() => {
        async function getInfo() {
            const res = await homepageInfo()
            console.log(res.data.blocks)
            setHomeInfo((pre:[])=>{
                return pre.concat(res.data.blocks)
            })
            console.log(homeInfo)
        }

        getInfo().then()
    }, [])
    return (
        <div>
            <Swiper
                className={style.recommendSwiper}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: 'swiper-button-prev',
                    prevEl: 'swiper-button-next'
                }}
                pagination={{clickable: true}}
                autoplay={
                    {delay: 3000}
                }
            >

                <div className={`${style["btn-prev"]} swiper-button-prev`}></div>
                <div className={`${style["btn-next"]} swiper-button-next`}></div>
            </Swiper>
            <div className={style.content}>
                <div className={style.left}>
                    <HotRecommend/>
                    <NewSongs/>
                    <SongList/>
                </div>
            </div>
        </div>
    );
};
