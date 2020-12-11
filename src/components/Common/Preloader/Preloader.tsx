import preloader from "../../../assets/images/810.gif";
import React from "react";
// @ts-ignore
import {preloaderOuter, preloaderPic} from './preloader.module.css'

type PropsType = {}

const Preloader: React.FC<PropsType> = (props) => {
    return (
        <div className={preloaderOuter}>
            <img src={preloader} className={preloaderPic}/>
        </div>
    )
}

export default Preloader;

