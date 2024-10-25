import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
    <div className="login-container">
        <h2 className="form-title>">Welcome to WOL
        </h2>
        <form action="#" className="login-form">
            <div className="input-wrapper">
                <input type="text" placeholder="Username" className="input-field" required />
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Password" className="input-field" required />
            </div>
            <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-roundedey-icon">
                {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
            <button className="login-button">Log In</button>
        </form>
    </div>
  )
}

export default Login
