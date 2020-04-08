import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../assets/LambdaLogo.svg";

import { authenticateUser } from '../../utils';


const Login = (props) => {

    const { isLoading, error } = props.context;
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        event.preventDefault()
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { updateState } = props.context.actions;
        authenticateUser(login, updateState, () => props.history.push('/dashboard/overview'));
    }

    return(

        <div className="login">
            <form className="login__container" method='dialog' onSubmit={(e) => handleSubmit(e)}>
            <Logo className="login__logo"/>
                <div className="login__container__items">
                    <label>Email Address</label><br/>
                    <input className="login__container__items__input" type="email" name="email" value={login.email} onChange={handleChange} required>
                    </input>
                </div>
                <div className="login__container__items">
                    <label>Password</label><br/>
                    <input className="login__container__items__input" type="password" name="password" value={login.password} onChange={handleChange} required>
                    </input>
                </div>
                <div className="login__container__items">
                    <button className="login__container__items__input__submitButn" type="submit">Login</button>
                </div>            
                {isLoading && <span>Loading...</span>}
                {error && <span>Unable to login, please check your password.</span>}  
                <div className="login__container__forgotText">
                    <p>Forgot <a className="login__container__forgotText__forgotLinks" href="/">Username/Password?</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;