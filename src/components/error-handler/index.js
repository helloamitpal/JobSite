import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../loadingIndicator';

// common error handler component
const ErrorHandler = ({ className, loading, hasError, message }) => (
    <div className={`error-handler ${className}`}>
        {loading ? <LoadingIndicator /> : null}
        {!loading && hasError && <p>{message}</p>}
    </div>
);

ErrorHandler.propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]).isRequired,
    message: PropTypes.string
};

ErrorHandler.defaultProps = {
    className: '',
    message: 'Something went wrong. We are looking into this issue. Please try again after some time.'
};

export default ErrorHandler;
