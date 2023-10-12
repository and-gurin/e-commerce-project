import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

const PaginationItems = ({pageCount, handlePageClick}:
                             {
                                 pageCount: number,
                                 handlePageClick: (selectedItem: { selected: number; }) => void
                             }
) => {

    return (
        <ReactPaginate
            previousLabel={null}
            nextLabel={'next'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={s.pagination}
            pageLinkClassName={s.paginationLinks}
            nextLinkClassName={s.paginationNext}
            activeLinkClassName={s.paginationActive}
            disabledLinkClassName={s.paginationDisable}
        />
    );
};

export default PaginationItems;