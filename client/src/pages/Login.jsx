import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);;

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Real-time validation
        const newErrors = { ...errors };
        if (name === "password") {
            if (!validatePassword(value)) {
                newErrors.password = "Password must be at least 8 characters long";
            } else {
                delete newErrors.password;
            }
        }
        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && validatePassword(formData.password)) {
            setIsLoading(true);
            // Simulate API call
            try {
                const response = await axios.post("http://localhost:5000/login", {
                    formData
                });
            
                if (response.data.token) {
                    // Save session token
                    localStorage.setItem("token", response.data.token);
            
                    // Redirect to dashboard
                    navigate("/dashboard");
                } else {
                    setErrors("Invalid username or password.");
                }
            } catch (err) {
                console.error("Login error:", err);
                setError("An error occurred. Please try again.");
            }
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            placeholder="Enter your username"
                            autoComplete="username"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                aria-invalid={errors.password ? "true" : "false"}
                                aria-describedby={errors.password ? "password-error" : undefined}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p id="password-error" className="mt-1 text-sm text-red-500" role="alert">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || Object.keys(errors).length > 0}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        aria-label={isLoading ? "Logging in..." : "Login"}
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin mr-2" size={20} />
                                Loading...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login
