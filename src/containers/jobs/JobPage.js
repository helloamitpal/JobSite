import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as jobActionCreators from './jobActionCreator';
import config from '../../config';
import ErrorHandler from '../../components/error-handler';

import './jobPage.css';

const JobPage = ({ jobState, jobActions, history }) => {
    const { loading, jobs, error } = jobState;

    // calling the API once the component load
    useEffect(() => {
        jobActions.getJobList();
    }, []);

    const navigateToJobDetails = (evt, selectedJob) => {
        evt.stopPropagation();
        history.push({
            pathname: config.JOB_DETAILS_PAGE,
            state: { selectedJob }
        });
    };

    return (
        <div className="home-page-container">
            <ErrorHandler loading={loading} hasError={error} message={error} />
            {(!loading && !error && jobs && jobs.length)
                ? (
                    jobs.map((job) => (<p key={job.id} onClick={(evt) => navigateToJobDetails(evt, job)}>{job.title}</p>))
                )
                : null
            }
        </div>
    );
};

JobPage.propTypes = {
    jobState: PropTypes.object,
    jobActions: PropTypes.object,
    history: PropTypes.object
};

const mapStateToProps = (state) => ({
    jobState: state.job
});

const mapDispatchToProps = (dispatch) => ({
    jobActions: bindActionCreators(jobActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);
