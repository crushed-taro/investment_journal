import { useLog } from "../../components/context/LogContext";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { callFindPasswordAPI } from "../../apis/MemberAPICalls";

export default function FindPassword() {

    const dispatch = useDispatch();
    const [ form, setForm ] = useState({
        Name: "",
        Id: ""
    });
    const log = useLog();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
        log("[FindPassword] onChangeHandler", form);
    };

    const onClickHandler = async() => {
        log("[FindPassword] onClickHandler Called");

        if(Object.values(form).some(value => !value)) {
            alert("모든 필수 입력값을 채워주세요.");
            return;
        }

        const member = await dispatch(callFindPasswordAPI({
            form: form,
        }));

        if(member.status === 200) {
            navigate("/change-password", {
                replace: true,
                state: { member: member.data }
            });
        }

    };

    return (
        <>
            <h1>FindPassword Page</h1>
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
                <button
                    onClick={onClickHandler}
                >
                    비밀번호 찾기
                </button>
            </div>
        </>
    );
}