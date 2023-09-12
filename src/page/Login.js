import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register, login } from "../service/usersService";
import "./style.css";
import {Field, Form, Formik} from "formik"

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
                navigate("/home");
            })
            .catch((error) => {
                console.log(222)
                console.log(error);
            });
    };


    return (
        <>
            <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <Formik initialValues={{name:'',email:'',phone:'',password:''}} onSubmit={(values)=>{
                        handleRegister(values)
                    }}>
                    <Form>
                        <h1 className="log1">Đăng ký</h1>
                        <div className="wrap-input100 validate-input">
                            <Field className="input100" type="text" name="name" placeholder="Tên người dùng" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <Field className="input100" type="email" name="email" placeholder="Email" id="email"/>
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <Field className="input100" type="text" name="phone" placeholder="Số điện thoại" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <Field className="input100" type="password" name="password" placeholder="Mật khẩu" id="password"/>
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
                        <button type="submit" className="log" onClick={handleSignInClick}>
                            Đăng ký
                        </button>
                    </Form>
                    </Formik>
                </div>
                <div className="form-container sign-in-container">
                    <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                        handleLogin(values)
                        console.log(values,123)
                    }}>
                        <Form>
                        <h1 className="log1">Đăng nhập</h1>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <Field className="input100" type="email" name="email" placeholder="Email" id="emailLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <Field className="input100" type="password" name="password" placeholder="Mật khẩu" id="passwordLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                        </div>
                        <button type="submit" className="log">
                            Đăng nhập
                        </button>
                        </Form>
                    </Formik>
                </div>
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