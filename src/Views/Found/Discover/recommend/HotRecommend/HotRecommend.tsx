import style from './HotRecommend.module.scss'
export default function HotRecommend() {
    return (
        <div className={style.hotRecommend}>
            <div className={style.header}>
                <ul className={style.list}>
                    <li className={style.bcImage}></li>
                    <li className={style["list-item"]}>热门推荐</li>
                    <li className={style["list-item"]}>华语</li>
                    <li className={style["list-item"]}>流行</li>
                    <li className={style["list-item"]}>摇滚</li>
                    <li className={style["list-item"]}>民谣</li>
                    <li className={style["list-item"]}>电子</li>
                    <li className={`${style.more} ${style["list-item"]}`}>更多</li>
                </ul>
            </div>
            <div className={style.content}>
                    <ul>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p>ssssssssssssssss</p>
                            </div>
                            <p className={style.describe}>ssssssssssssssss</p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                        <li>
                            <div className={style.cover}>
                                <img src="" alt=""/>
                                <p></p>
                            </div>
                            <p className={style.describe}></p>
                        </li>
                    </ul>
                </div>
        </div>
    );
};
