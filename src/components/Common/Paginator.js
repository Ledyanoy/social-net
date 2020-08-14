import {pagination, selected} from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 5}) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    ;

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const paginationPages = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(page => {
            return <li key={page} className={currentPage === page && selected} onClick={() => {
                changePage(page)
            }}>{page}</li>
        });

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>}
            <ul className={pagination}>
                {paginationPages}
            </ul>
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</button>}
        </div>
    )
}

export default Paginator;