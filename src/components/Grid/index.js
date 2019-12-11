import React, { memo } from 'react';
import PropTypes from 'prop-types';

import GridRow from './gridRow';
import Pagination from '../pagination';

import './grid.css';

const Grid = memo(({ list, onClickRow, className }) => {
    return (
        <div className={`grid-container ${className}`}>
            {list.length === 0
                ?  <p className="no-item-found">No job found</p>
                : list.map((job) => (
                    <div className="grid-item-container" key={`grid-row-${job.id}`} onClick={(evt) => onClickRow(evt, job)}>
                        <GridRow {...job} />
                    </div>
                ))
            }
        </div>
    );
});

Grid.propTypes = {
    list: PropTypes.array.isRequired,
    onClickRow: PropTypes.func.isRequired,
    className: PropTypes.string
};

Grid.defaultProps = {
    className: ''
};

export default Grid;
