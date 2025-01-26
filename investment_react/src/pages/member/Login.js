import { useState } from "react";
import { useLog } from "../../components/context/LogContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callLoginAPI } from "../../apis/MemberAPICalls";
import './Login.css';  

export default function Login() {

    const log = useLog();
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onClickLoginHandler = async () => {
        log("[Login] onClickLoginHandler Called");

        if (Object.values(form).some(value => !value)) {
            alert("아이디 / 비밀번호를 입력해주세요.");
            return;
        }

        const member = await dispatch(callLoginAPI({ form: form }));

        if (member.status === 200) {
            navigate("/main", {
                replace: true,
            });
        }
    };

    const onClickSignupHandler = () => {
        log("[Login] onClickSignupHandler Called");
        navigate("/register");
    };

    const onClickFindIdHandler = () => {
        log("[Login] onClickFindIdHandler Called");
        navigate("/find-id");
    };

    const onClickFindPasswordHandler = () => {
        log("[Login] onClickFindPasswordHandler Called");
        navigate("/find-password");
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="idInput" className="form-label">ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="idInput"
                            placeholder="Enter your ID"
                            name="Id"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            placeholder="Enter your Password"
                            name="Password"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="d-grid">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onClickLoginHandler}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <span
                        className="text-primary cursor-pointer"
                        onClick={onClickSignupHandler}
                    >
                        회원가입
                    </span>
                    <span className="mx-2">|</span>
                    <span
                        className="text-primary cursor-pointer"
                        onClick={onClickFindIdHandler}
                    >
                        아이디찾기
                    </span>
                    <span className="mx-2">|</span>
                    <span
                        className="text-primary cursor-pointer"
                        onClick={onClickFindPasswordHandler}
                    >
                        비밀번호찾기
                    </span>
                </div>
            </div>
        </div>
    );
}