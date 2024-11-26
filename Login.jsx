import React from 'react'
import { useState } from 'react'
import './Login.css';

const Login = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
        <div className="login-body">
            <div className="login-container">
                <h2 className="form-title">Welcome to WOL</h2 >
                <form action="#" className="login-form">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Username" className="input-field" required />
                    </div>
                    <div className="input-wrapper">
                        <input type={isPasswordShown ? 'text' : 'password'} placeholder="Password" className="input-field" required />
                        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-sym  bols-rounded eye-icon">
                            {isPasswordShown ? 'visibility' : 'visibility_off'}
                        </i>
                    </div>

                    <button className="login-button">Log In</button>
                </form>
            </div >
        </div >
    )
}

export default Login
