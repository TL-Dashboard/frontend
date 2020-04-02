import React, { useState } from 'react';

const Context = React.createContext({});

// * Export the Context's Consumer.
export const { Consumer } = Context;

export const Provider = ({ children }) => {

    const removeAlert = id => {
        setState(prev => ({
            ...prev,
            alerts: prev.alerts.filter(item => item.id !== id),
        }))
    }

    const updateState = (key, value) =>{
        setState(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const [ state, setState ] = useState({
        isAuthenticated: false,
        isLoading: false,
        error: null,
        data: [],
        user: {},
        actions: {
            removeAlert,
            updateState
        },  
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
            },
            {
                id: 6,
                type: 'ticket',
                user: 'Pasquale Collins'
            },
            {
                id: 7,
                type: 'ticket',
                user: 'Pasquale Collins'
            },
            {
                id: 8,
                type: 'ticket',
                user: 'Pasquale Collins'
            }
        ],
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