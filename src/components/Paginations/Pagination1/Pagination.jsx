import React from 'react';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import "./pagination.scss";


// https://github.com/mayankshubham/react-pagination/tree/master

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    const screenWidth = screen.width;
    console.log("screenWidth", screenWidth)
    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container1', { [className]: className })}
        >
            <li key={nanoid()}
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {

                    return <li key={nanoid()} className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li key={nanoid()}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>

                );
            })}
            <li key={nanoid()}
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;