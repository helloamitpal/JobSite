import React, { Fragment } from 'react';

const GridRow = ({ id, title, employmentTypeLabel }) => (
    <Fragment>
        <span>{title}</span>
        <p>{`Job Id: ${id}, ${employmentTypeLabel}`}</p>
    </Fragment>
);

export default GridRow;
