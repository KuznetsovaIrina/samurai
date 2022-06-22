import React from 'react';
import s from './Users.module.css';

const Paginatror = ({currentPage, onPageChanged, totalItemsCount, pageSize }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    return (
        <>
            <div className='text-center'>
                {currentPage > 1 && <button onClick={ () => { onPageChanged(currentPage - 1) } }>Prev Page</button>}
                {currentPage > 1 && <button onClick={() => { onPageChanged(1) }}>First Page</button>}
                <span className={s.selectedPage}>{currentPage}</span>
                {currentPage < pagesCount && <button onClick={() => { onPageChanged(pagesCount) }}>Last Page</button>}
                {currentPage < pagesCount && <button onClick={ () => { onPageChanged(currentPage + 1) } }>Next Page</button>}
            </div>
        </>
    );
}

export default Paginatror;