import { handle } from 'redux-pack';

import * as actionTypes from './jobActionTypes';

// initial store state
const initialState = {
    jobs: null,
    error: '',
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
                    jobs: [...payload]
                }),
                failure: (prevState) => (failureMessage(prevState, payload)),
                finish: (prevState) => ({
                    ...prevState,
                    loading: false
                })
            });
        }

        default:
            return state;
    }
};

export default jobReducer;
