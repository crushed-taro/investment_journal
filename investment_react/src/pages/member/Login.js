import { useState } from "react";
import { useLog } from "../../components/context/LogContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const log = useLog();
    const [ form, setForm ] = useState();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value 
        });
        // log(`onChangeHandler : `, form);
    }

    const onClickLoginHandler = () => {
        log("[Login] onClickLoginHandler Called");
    }

    const onClickSignupHandler = () => {
        log("[Login] onClickSignupHandler Called");
        navigate("/register");
    }

    const onClickFindIdHandler = () => {
        log("[Login] onClickFindIdHandler Called");
        navigate("/find-id");
    }

    return (
        <>
            <h1>Login Page</h1>
            <div>

                <input 
                    type="text"
                    placeholder="Id"
                    name="Id"
                    onChange={onChangeHandler}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="Password"
                    onChange={onChangeHandler}
                />

                <button onClick={onClickLoginHandler}>Login</button>

                <div>
                    <span
                        onClick={onClickSignupHandler}
                    >
                        회원가입
                    </span>
                    <span>
                         | 
                    </span>
                    <span
                        onClick={onClickFindIdHandler}
                    >
                        아이디찾기
                    </span>
                </div>

            </div>
        </>
    );
}