import React, { useState, Fragment, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import './pagination.css';

const Pagination = memo(({ pageSize, list, children }) => {
    const [paginatedList, setPaginatedList] = useState([]);
    const [offset, setOffset] = useState(0);

    const calculatePaginatedList = (offsetVal) => {
        const start = pageSize * offsetVal;
        const end = Math.min(list.length, start + pageSize);
        setPaginatedList(list.slice(start, end));
    };

    useEffect(() => {
        if (list.length <= pageSize) {
            setPaginatedList([...list]);
        } else {
            calculatePaginatedList(offset);
        }
    }, [list]);

    const gotoPrev = () => {
        const updatedOffset = offset <= 0 ? 0 : offset - 1;
        setOffset(updatedOffset);
        calculatePaginatedList(updatedOffset);
    };

    const gotoNext = () => {
        const updatedOffset = offset + 1;
        setOffset(updatedOffset);
        calculatePaginatedList(updatedOffset);
    };

    return (
        <Fragment>
            {
                children([...paginatedList])
            }
            <ul className="pagination-container">
                <li disabled={list.length <= pageSize || offset === 0} onClick={gotoPrev}>&lt; Prev</li>
                <li disabled={list.length <= pageSize || offset === Math.floor(list.length / pageSize)} onClick={gotoNext}>Next &gt;</li>
            </ul>
        </Fragment>
    );

});

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
};

export default Pagination;
