import style from './header.module.scss'
import {NavLink} from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <h1 className={style.logo}>
                    <NavLink to="/found" title="网易云音乐"></NavLink>
                </h1>
                <ul className={style.navbar}>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/found">发现音乐</NavLink></li>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/mine">我的音乐</NavLink></li>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/mine">关注</NavLink></li>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/mine">商城</NavLink></li>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/mine">音乐人</NavLink></li>
                    <li className={style['navbar-item']}><NavLink activeClassName={style.active} to="/mine">下载客户端</NavLink></li>
                </ul>
                <div className={style.search}>
                    <Input placeholder="small size" prefix={<SearchOutlined />} />
                </div>
                <div className={style.createCenter}>
                    <button>创客中心</button>
                </div>
                <div className={style.login}>
                    <h4>登录</h4>
                </div>
            </div>
        </div>
    );
};
