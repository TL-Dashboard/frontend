import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = rest.context.isAuthenticated || getToken();

	return (
		<Route
			{...rest}
            render={props => {
                // console.log(getToken())
				return isAuthenticated ? <Component context={rest.context} {...props} /> : <Redirect to='/' />;
			}}
		/>
	);
};

export default PrivateRoute;
