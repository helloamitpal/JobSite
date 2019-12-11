import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as jobActionCreators from './jobActionCreator';
import config from '../../config';
import ErrorHandler from '../../components/error-handler';
import Grid from '../../components/Grid';

import './jobPage.css';

const JobPage = ({ jobState, jobActions, history }) => {
    const { loading, jobs, error, filteredJobs } = jobState;
    const [searchText, setSearchText] = useState('');

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

    const onChangeSearch = ({ target: { value } }) => {
        setSearchText(value);

        if (value.trim()) {
            jobActions.searchJob(value);
        }
    };

    return (
        <div className="home-page-container">
            <ErrorHandler loading={loading} hasError={error} message={error} />
            {(!loading && !error)
                ? (
                    <div className="job-list-container">
                        <div className="search-text-container">
                            <label>Search Job</label>
                            <input autoFocus type="text" value={searchText} onChange={onChangeSearch} />
                            {(filteredJobs || jobs) ? <i>{`${searchText.trim().length ? filteredJobs.length : jobs.length} jobs found`}</i> : null}
                        </div>
                        <Grid list={searchText.trim().length ? filteredJobs : jobs} onClickRow={navigateToJobDetails} />
                    </div>
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
