import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register, login } from "../service/usersService";
import "./style.css";






export default function Login() {

    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleRegister = (values) => {
        dispatch(register(values))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogin = (values) => {
        dispatch(login(values))
            .then((response) => {
                console.log(response);
                navigate("/dashboard"); // Chuyển hướng đến trang Dashboard sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {/*đăng ký*/}
            <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <form onSubmit={handleRegister}>
                        <h1 className="log1">Đăng ký</h1>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="username" placeholder="Tên người dùng" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" name="email" placeholder="Email" id="email"/>
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Mật khẩu" id="password"/>
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input
                                className="input100"
                                type="password"
                                name="confirmPassword"
                                placeholder="Nhập lại mật khẩu"
                                id="password-confirm"
                            />
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                        </div>
                        <button type="submit" className="log">
                            Đăng ký
                        </button>
                    </form>
                </div>

                {/*Đăng nhập*/}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1 className="log1">Đăng nhập</h1>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" name="email" placeholder="Email" id="emailLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Mật khẩu" id="passwordLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                            <button type="submit" className="log">
                            Đăng nhập
                            </button>

                         </form>
                </div>

                {/*nút chuyển trạng trái đăng ký đăng nhập*/}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <div className="logo">Cooky</div>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>
                                Đăng nhập
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <div className="logo">Cooky</div>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}