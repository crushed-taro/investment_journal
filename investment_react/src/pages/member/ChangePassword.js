import { useEffect, useState } from "react";
import { useLog } from "../../components/context/LogContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { callChangePasswordAPI } from "../../apis/MemberAPICalls";

export default function ChangePassword() {

    const location = useLocation();
    const [ isPasswordMatch, setIsPasswordMatch ] = useState(false);
    const [ form, setForm ] = useState({
        Name: location.state?.member.memberName,
        Id: location.state?.member.memberId,
        Password: "",
        confirmPassword: ""
    });
    const log = useLog();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsPasswordMatch(form.Password === form.confirmPassword);
    }, [form.Password, form.confirmPassword]);


    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
        // log(`[ChangePassword] onChangeHandler : `, form);
    };

    const onClickSubmitHandler = async() => {
        log(`[ChangePassword] onClickSubmitHandler : `, form);

        if (Object.values(form).some(value => !value)) {
            alert("모든 필수 입력값을 채워주세요.");
            return;
        }

        if (!isPasswordMatch) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        await dispatch(callChangePasswordAPI({
            form: form
        }));

        navigate("/", {replace: true});

    };

    return (
        <>
            <h1>ChangePassword Page</h1>

            <div>
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
                    비밀번호 변경
                </button>

            </div>

        </>
    );
}