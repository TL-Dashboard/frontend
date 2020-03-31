import React, { useState } from 'react';

const Context = React.createContext({});

// * Export the Context's Consumer.
export const { Consumer } = Context;

export const Provider = ({ children }) => {
    const [ state, setState ] = useState({
        authenticatedUser: null,
        alerts: [
            {
                id: 1,
                type: 'support',
                user: 'Roger Lind'
            },
            {
                id: 2,
                type: 'missing',
                user: 'Katlyn Ullrich'
            },
            {
                id: 3,
                type: 'submitted',
                user: 'Minerva Pacocha'
            },
            {
                id: 4,
                type: 'ticket',
                user: 'Marie Rath'
            },
            {
                id: 5,
                type: 'ticket',
                user: 'Pasquale Collins'
            }
        ]
    });

    return (
        <Context.Provider value={state}>
            { children }
        </Context.Provider>
    )
}

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} - A higher-order component.
 */

// * Export by default the withContext(Component) functiton.
// * This function allows other components (ex: Header, SignIn, SignOut, etc.) to access context.
export default function withContext(Component) {
    return function ContextComponent(props) {
      return (
        <Context.Consumer>
          {context => <Component {...props} context={context} />}
        </Context.Consumer>
      );
    }
}