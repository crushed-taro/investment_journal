import { useLog } from "../../components/context/LogContext";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { callFindIdAPI } from "../../apis/MemberAPICalls";

export default function FindId() {

    const dispatch = useDispatch();
    const log = useLog();
    const [ form, setForm ] = useState({
        Name: ""
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
        log("[FindId] onChangeHandler", form);
    };

    const onClickHandler = () => {
        log("[FindId] onClickHandler Called");

        if(Object.values(form).some(value => !value)) {
            alert("모든 필수 입력값을 채워주세요.");
            return;
        }

        dispatch(callFindIdAPI({
            form: form
        }));

        alert("아이디를 찾았습니다.");
    };

    return (
        <>
            <h1>FindId Page</h1>
        
            <div>
                <input 
                    type="text"
                    placeholder="Name"
                    name="Name"
                    onChange={onChangeHandler}
                />
                <button
                    onClick={onClickHandler}
                >
                    아이디찾기
                </button>
            </div>
        </>
    );
}