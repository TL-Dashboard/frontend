import React, { useState } from 'react';
import {ReactComponent as Logo} from "../../assets/LambdaLogo.svg";

import { authenticateUser } from '../../utils';


const Login = (props) => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.value,
    })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
        authenticateUser(data, () => props.history.push('/dashboard'));
    }

    return(

        <div className="login">
            <form className="login__container" onSubmit={handleSubmit}>
            <Logo className="login__logo"/>
                <div className="login__container__items">
                    <label>Email Address</label><br/>
                    <input className="login__container__items__input" type="email" name="email" value={data.email} onChange={handleChange}>
                    </input>
                </div>
                <div className="login__container__items">
                    <label>Password</label><br/>
                    <input className="login__container__items__input" type="password" name="password" value={data.password} onChange={handleChange}>
                    </input>
                </div>

                <div className="login__container__items">
                        <input className="login__container__items__input__submitButn" type="submit" />
                        <button type="submit" name="Login" />
                </div>            
                  
                <div className="login__container__forgotText">
                    <p>Forgot <a className="login__container__forgotText__forgotLinks" href="#">Username/Password?</a></p>
                </div>
            </form>
        </div>

    )
}

export default Login;