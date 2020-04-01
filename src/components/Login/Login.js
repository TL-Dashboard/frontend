import React from "react";
import {ReactComponent as Logo} from "../../assets/LambdaLogo.svg";


const Login = () => {
    return(
    
        <div className="login">
            <form className="login__container">
            <Logo className="login__logo"/>
                <div className="login__container__items">
                    <label>Email Address</label><br/>
                    <input className="login__container__items__input" type="email">
                    </input>
                </div>
                <div className="login__container__items">
                    <label>Password</label><br/>
                    <input className="login__container__items__input" type="password">
                    </input>
                </div>

                <div className="login__container__forgotText">
                    <p>Forgot <a className="login__container__forgotText__forgotLinks" href="#">Username/Password?</a></p>
                </div>
            </form>
        </div>

    )
}

export default Login;