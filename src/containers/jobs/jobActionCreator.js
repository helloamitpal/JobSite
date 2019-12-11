import * as actionTypes from './jobActionTypes';

// Action for getting the all question list
export const getJobList = () => (dispatch, getState, { api }) => {
    dispatch({
        type: actionTypes.GET_ALL_JOBS,
        promise: api.get('/alljobs'),
        payload: {}
    });
};

export const searchJob = (searchText) => (dispatch) => {
    dispatch({
        type: actionTypes.SEARCH_JOB,
        payload: { searchText }
    });
};
