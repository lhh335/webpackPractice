import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import AppRoutes from './AppRoutes';
import { createHashHistory } from 'history';



render(<Router
    history={useRouterHistory(createHashHistory)({ queryKey: false })}
    onUpdate={() => window.scrollTo(0, 0)}
    >
    {AppRouters['routes']}
</Router>, document.querySelector("#index"));