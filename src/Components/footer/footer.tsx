import React from 'react'
import style from './footer.module.scss'
export default function footer() {
    return (
        <footer className={style.footer}>
            <p>服务条款| 隐私政策| 儿童隐私政策| 版权投诉指引| 联系我们 | 广告合作 | 廉正举报</p>
            <p>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
            <p>粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</p>
        </footer>
    )
}
