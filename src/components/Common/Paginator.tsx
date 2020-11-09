import style from './Paginator.module.css'
import React, {useState} from "react";


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 5}) => {
    const pageCount: number = Math.ceil(totalItemsCount / pageSize);
    const pages:Array<number> = [];
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
            return <li key={page} className={(currentPage === page) ? style.selected : ''} onClick={() => {
                changePage(page)
            }}>{page}</li>
        });

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <button className={style.button} onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>}
            <ul className={style.pagination}>
                {paginationPages}
            </ul>
            {portionCount > portionNumber &&
            <button className={style.button} onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</button>}
        </div>
    )
}

export default Paginator;