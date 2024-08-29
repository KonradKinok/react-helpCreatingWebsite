import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import data from '../Pagination0/mock-data.json';
// import './style.scss';
// import scss from "./Pagination.module.scss"
;
let paginationTotalPages = 20;
let paginationPageSize = 1;
export function PaginationApp1() {
    const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    return (
        <>
            <div >
                <p>Paginacja1: {currentPage}</p>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={paginationTotalPages}
                    pageSize={paginationPageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    );
}