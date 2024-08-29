import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import data from './mock-data.json';
import './style.scss';

import { PaginationApp1 } from '../Pagination1/PaginationApp1';
import { nanoid } from 'nanoid';
let PageSize = 10;
let paginationTotalPages = 10;
let paginationPageSize = 1;
export function PaginationApp() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage1, setCurrentPage1] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <>
            <table>
                <thead>
                    <tr key={nanoid()}>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map((item, index) => {
                        return (
                            <tr key={nanoid()}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}

            />
            <hr />
            <p>Paginacja0: {currentPage}</p>

            <PaginationApp1
            />

        </>
    );
}