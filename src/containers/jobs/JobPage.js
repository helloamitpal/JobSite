import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as jobActionCreators from './jobActionCreator';

import './jobPage.css';

const JobPage = ({ jobState, jobActions }) => {
    const { loading, jobs, error } = jobState;

    // calling the API once the component load
    useEffect(() => {
        jobActions.getJobList();
    }, []);

    return (
        <div className="home-page-container">
            {(!loading && !error && jobs && jobs.length)
                ? (
                    jobs.map(({ title }) => (<p>{title}</p>))
                )
                : null
            }
        </div>
    );
};

JobPage.propTypes = {
    jobState: PropTypes.object,
    jobActions: PropTypes.object
};

const mapStateToProps = (state) => ({
    jobState: state.job
});

const mapDispatchToProps = (dispatch) => ({
    jobActions: bindActionCreators(jobActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);
