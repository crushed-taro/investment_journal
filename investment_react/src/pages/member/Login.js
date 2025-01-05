import { useState, useEffect } from "react";
import { useLog } from "../../components/context/LogContext";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callLoginAPI } from "../../apis/MemberAPICalls";

export default function Login() {

    const log = useLog();
    const [ form, setForm ] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);

    useEffect(() => {
        log("[Login] useEffect : ", member);

        if(member.status === 200) {
            navigate("/main", {
                replace: true,
            });
        }
    }, [member]);


    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value 
        });
        // log(`onChangeHandler : `, form);
    }

    const onClickLoginHandler = () => {
        log("[Login] onClickLoginHandler Called");

        if(Object.values(form).some(value => !value)) {
            alert("아이디 / 비밀번호를 입력해주세요.");
            return;
        }

        dispatch(callLoginAPI({
            form: form,
        }))

    }

    const onClickSignupHandler = () => {
        log("[Login] onClickSignupHandler Called");
        navigate("/register");
    }

    const onClickFindIdHandler = () => {
        log("[Login] onClickFindIdHandler Called");
        navigate("/find-id");
    }

    const onClickFindPasswordHandler = () => {
        log("[Login] onClickFindPasswordHandler Called");
        navigate("/find-password");
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
                    <span>
                         | 
                    </span>
                    <span
                        onClick={onClickFindPasswordHandler}
                    >
                        비밀번호찾기
                    </span>
                </div>

            </div>
        </>
    );
}