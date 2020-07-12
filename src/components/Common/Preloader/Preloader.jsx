import preloader from "../../../assets/images/810.gif";
import React from "react";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'red',
        }}>
            <img src={preloader} style={{marginLeft: '200px', display: 'block',
            }}/>
        </div>
    )
}

export default Preloader;

