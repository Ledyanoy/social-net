import preloader from "../../../assets/images/810.gif";
import React from "react";
import {preloaderOuter, preloaderPic} from './preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={preloaderOuter}>
            <img src={preloader} className={preloaderPic}/>
        </div>
    )
}

export default Preloader;

