import React from 'react';
import PropTypes from 'prop-types';

import './jobDetailsPage.css';

const JobDetailsPage = ({ history }) => {
    return (
        <div className="job-details-page-container">
            <h1>Job Details</h1>
        </div>
    );
};

JobDetailsPage.propTypes = {
    history: PropTypes.object
};

export default JobDetailsPage;
