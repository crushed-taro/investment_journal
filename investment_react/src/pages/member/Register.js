import { useEffect, useState } from "react";
import { useLog } from "../../components/context/LogContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { callRegisterAPI } from "../../apis/MemberAPICalls";

export default function Register() {

    const log = useLog();
    const [ form, setForm ] = useState({
        Name: "",
        Id: "",
        Password: "",
        confirmPassword: ""
    });
    const [ isPasswordMatch, setIsPasswordMatch ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsPasswordMatch(form.Password === form.confirmPassword);
    }, [form.Password, form.confirmPassword]);

    const onChangeHandler = (e) => {
        setForm({
           ...form, 
            [e.target.name]: e.target.value 
        });
        // log(`[Register] onChangeHandler : `, form);
    };

    const onClickSubmitHandler = async() => {
        log(`[Register] onClickSubmitHandler : `, form);

        if (Object.values(form).some(value => !value)) {
            alert("모든 필수 입력값을 채워주세요.");
            return;
        }

        if (!isPasswordMatch) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const member = await dispatch(callRegisterAPI({
            form: form
        }));

        if(member.status === 201) {
            navigate("/", { replace: true })
        }

    };

    return (
        <>
            <h1>Register Page</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Name"
                    name="Name"
                    onChange={onChangeHandler}
                />
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={onChangeHandler}
                />
                {
                    isPasswordMatch ? 
                    (
                        <p>Passwords match</p>
                    ) 
                    : 
                    (
                        <p>Passwords do not match</p>
                    )
                }

                <button
                    onClick={onClickSubmitHandler}
                >
                    회원가입
                </button>
            </div>

        </>
    );
}