import { handle } from 'redux-pack';

import * as actionTypes from './jobActionTypes';
import { synthesizeJobData } from './jobHelper';

// initial store state
const initialState = {
    jobs: [],
    error: '',
    filteredJobs: [],
    loading: false
};

// common failure function for all APIs
const failureMessage = (prevState, payload) => ({
    ...prevState,
    error: (payload && payload.message === 'Network Error') ? 'Please check the network and try again.' : 'Something went wrong. Please try again after some time.'
});

const jobReducer = (state = initialState, action = '') => {
    const { type, payload } = action;

    switch (type) {
        // Reducer to fetch the all jobs
        case actionTypes.GET_ALL_JOBS: {
            return handle(state, action, {
                start: (prevState) => ({
                    ...prevState,
                    error: '',
                    loading: true
                }),
                success: (prevState) => ({
                    ...prevState,
                    jobs: synthesizeJobData([...payload]),
                    filteredJobs: []
                }),
                failure: (prevState) => (failureMessage(prevState, payload)),
                finish: (prevState) => ({
                    ...prevState,
                    loading: false
                })
            });
        }

        case actionTypes.SEARCH_JOB: {
            let { searchText } = payload;
            let filteredList = [];
            const { jobs } = state;
            if (jobs) {
                searchText = searchText.trim().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                filteredList = jobs.filter(({ title }) => (new RegExp(searchText, 'i').test(title)));
            }

            return {
                ...state,
                loading: false,
                error: '',
                filteredJobs: filteredList
            }
        }

        default:
            return state;
    }
};

export default jobReducer;
