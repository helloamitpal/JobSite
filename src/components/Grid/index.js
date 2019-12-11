import React from 'react';
import PropTypes from 'prop-types';

import './grid.css';

const Grid = ({ list, onClickRow, className }) => {
    return (
        <div className={`grid-container ${className}`}>
            {list.length === 0
                ?  <p>No job found</p>
                : list.map((job) => (
                    <div className="grid-item-container" key={`grid-row-${job.id}`} onClick={(evt) => onClickRow(evt, job)}>
                        <span>{job.title}</span>
                        <p>{`Job Id: ${job.id}, ${job.employment_type}`}</p>
                    </div>
                ))
            }
        </div>
    );
};

Grid.propTypes = {
    list: PropTypes.array.isRequired,
    onClickRow: PropTypes.func.isRequired,
    className: PropTypes.string
};

Grid.defaultProps = {
    className: ''
};

export default Grid;
