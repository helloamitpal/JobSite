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
    const { loading, jobs, error } = jobState;
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
    };

    return (
        <div className="home-page-container">
            <ErrorHandler loading={loading} hasError={error} message={error} />
            {(!loading && !error && jobs)
                ? (
                    <div className="job-list-container">
                        <div className="search-text-container">
                            <label>Search Job</label>
                            <input type="text" value={searchText} onChange={onChangeSearch} />
                            {jobs.length && <i>{`${jobs.length} jobs found`}</i>}
                        </div>
                        <Grid list={jobs} onClickRow={navigateToJobDetails} />
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
