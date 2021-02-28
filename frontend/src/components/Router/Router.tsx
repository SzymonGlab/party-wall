import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, RouteProps } from 'react-router-dom';

import { LogIn } from '../../views/LogIn';
import { SignUp } from '../../views/SignUp/SignUp';
import { List } from '../../views/List';
import { AuthContext, AuthProvider } from '../AuthProvider';

type PrivateRouteProps = RouteProps & { component: React.FC };

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent, ...rest }) => {
    const { authenticated } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(routeProps) => (authenticated ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />)}
        ></Route>
    );
};

export const Router: React.FC = () => (
    <AuthProvider>
        <BrowserRouter>
            <div>
                <PrivateRoute exact path="/" component={List} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
            </div>
        </BrowserRouter>
    </AuthProvider>
);
