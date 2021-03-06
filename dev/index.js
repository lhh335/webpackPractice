import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory, hashHistory, browserHistory } from 'react-router';
import AppRoutes from './AppRoutes';
import { createHashHistory } from 'history';
import AppNavDrawer from './AppNavDrawer';
import Master from './Master';


render(
    <div>
        <Master />
        <Router
            
            history={useRouterHistory(createHashHistory)({ queryKey: false })}
            onUpdate={() => window.scrollTo(0, 0)}
            >
            {AppRoutes['routes']}
        </Router>
    </div>, document.querySelector("#index"));