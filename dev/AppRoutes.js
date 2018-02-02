import React from 'react';
import {
    Route,
    Redirect,
    IndexRoute,
} from 'react-router';
import PageOne from './page/PageOne';
import PageTwo from './page/PageTwo';
import PageThree from './page/PageThree';
import PageFour from './page/PageFour';
import Master from './Master';
import Home from './HomePage';

const AppRoutes = {
    "routes": (
        <Route path='/' component={Master}>
            <IndexRoute component={Home} />
            <Redirect from="page" to="page/one" />
            <Route path='page'>
                <Route path='one' component={PageOne} />
                <Route path='two' component={PageTwo} />
                <Route path='three' component={PageThree} />
                <Route path='four' component={PageFour} />
            </Route>
        </Route>
    )
}
export default AppRoutes;