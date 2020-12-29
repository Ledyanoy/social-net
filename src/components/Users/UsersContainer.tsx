import {useSelector} from "react-redux";

import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching} from "../../redux/selectors";
import {Users} from "./Users";


type UsersPagePropsType = {
    pageTitle: string
}


export const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching);
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ?
            <Preloader/>
            : null}
        <Users/>
    </>
}





