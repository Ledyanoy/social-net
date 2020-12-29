import React, {useEffect} from 'react';
import User from "./User";

import Paginator from "../Common/Paginator";
import style from "./users.module.css";
import {UserSearchForm} from "./UsersSearchForm";
import {FilterType, followTC, getUsersTC, unfollowTC} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getIsButtonDisabled,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSuperSelector
} from "../../redux/selectors";
import { useHistory } from 'react-router-dom';
import * as queryString from "querystring";

type PropsType = {}

type QueryParamsTypes = { term?: string; page?: string; friend?: string };
export const Users: React.FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount);
    const pageSize = useSelector(getPageSize);
    const currentPage = useSelector(getCurrentPage);
    const users = useSelector(getUsersSuperSelector);
    const filter = useSelector(getUsersFilter);
    const isButtonDisabled = useSelector(getIsButtonDisabled);

    const history = useHistory()
    const dispatch = useDispatch()

    const onPageChanged = (page: number) => {
        dispatch(getUsersTC(page, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter));
    }

    const follow = (userId: number) => {
        dispatch(followTC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowTC(userId))
    }

    useEffect(() => {
        const search = history.location.search;
        const parsed = queryString.parse(search.substr(1)) as QueryParamsTypes


        let actualPage: number = parsed.page ? +parsed.page : currentPage
        let actualFilter = {
            term: parsed.term ? parsed.term as string : filter.term,
            friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : parsed.friend === 'false' ? false : filter.friend
        }
        dispatch(getUsersTC(actualPage, pageSize, actualFilter));
    }, [])


    useEffect(()=> {
        const query: QueryParamsTypes = {}
        if (filter.term) query.term  =  filter.term
        if (filter.friend !== null ) query.friend = String(filter.friend)
        if (currentPage !== 1 ) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter.term, filter.friend, currentPage])



    const userList = users.map(user => <User key={user.id} user={user}
                                             followTC={follow}
                                             unfollowTC={unfollow}
                                             isButtonDisabled={isButtonDisabled}
    />);


    return (
        <div>
            <UserSearchForm onFilterChanged={onFilterChanged}/>

            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       changePage={onPageChanged}
            />

            <div>
                <ul className={style.usersLIst}>
                    {userList}
                </ul>
            </div>
        </div>
    )

}

