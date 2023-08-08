import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

const PaginationItems = ({pageCount, handlePageClick}) => {

    return (
        <ReactPaginate
            previousLabel={null}
            nextLabel={'next'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            containerClassName={s.pagination}
        />
    );
};

export default PaginationItems;