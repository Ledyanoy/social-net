import {pagination, selected} from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalUsersCount,pageSize, currentPage, changePage}) => {
    const pageCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    };

    const paginationPages = pages.map(page => {
        return <li key={page} className={currentPage === page && selected} onClick={() => {
            changePage(page)
        }}>{page}</li>
    });

    return (
        <ul className={pagination}>
            {paginationPages}
        </ul>
    )
}

export default Paginator;