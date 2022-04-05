import style from './header.module.scss'
export default function Header() {
    return (
        <div className={style['m-subnav']}>
            <div className={style.wrap}>
                <ul className={style.navbar}>
                    <li>推荐</li>
                    <li>排行榜</li>
                    <li>歌单</li>
                    <li>主播电台</li>
                    <li>歌手</li>
                    <li>新碟上架</li>
                </ul>
            </div>
        </div>
    );
};
