import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/button';
import config from '../../../config';

import './jobDetailsPage.css';

const JobDetailsPage = ({ history }) => {
    const { state: { selectedJob } } = history.location;
    const { title, description, employment_type, id } = selectedJob || {};

    const goBackHome = () => {
        history.push(config.JOB_PAGE);
    };

    return (
        <div className="job-details-page-container">
            {selectedJob
                ? (
                    <div className="details-section">
                        <h3>{`${title} (JOB ID: ${id})`}</h3>
                        <i>{employment_type}</i>
                        <p>{description}</p>
                        <Button onClick={goBackHome} label="Back" />
                    </div>
                )
                : (
                    <Fragment>
                        <p>Invalid job. Please find your dream job.</p>
                        <Button onClick={goBackHome} primary label="Home" />
                    </Fragment>
                )
            }
        </div>
    );
};

JobDetailsPage.propTypes = {
    history: PropTypes.object
};

export default JobDetailsPage;
