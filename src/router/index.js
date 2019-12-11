import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import config from '../config';
import LoadingIndicator from '../components/loadingIndicator';

import './router.css';

// Implemented router with React.lazy to reduce the loading time.
// On demand module load will be taking place while a certain router URL will be accessed.
// This is a common router for all modules.
const Router = () => {
    const NotFoundModule = (React.lazy(() => (import('../containers/not-found/NotFoundPage'))));

    return (
        <div className="body-container">
            <Suspense fallback={<LoadingIndicator />}>
                <Switch>
                    <Route path="" render={(props) => <NotFoundModule {...props} />} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default withRouter(Router);
