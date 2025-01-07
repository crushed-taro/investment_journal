import { useLog } from "../../components/context/LogContext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { callFindIdAPI } from "../../apis/MemberAPICalls";

export default function FindId() {

    const dispatch = useDispatch();
    const log = useLog();
    const [ form, setForm ] = useState({
        Name: ""
    });
    const [ isHaveId, setIsHaveId ] = useState([]);
    const navigate = useNavigate();
    const member = useSelector(state => state.memberReducer);

    useEffect(() => {
        log("[FindId] useEffect : ", member);
        
        if(Array.isArray(member)) {
            setIsHaveId(member);
        }

    }, [member]);

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

        
    };

    const onClickHomeHandler = () => {
        log("[FindId] onClickHomeHandler Called");
        navigate("/", { replace: true });
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
                    아이디 찾기
                </button>
            </div>
            {
                isHaveId.length > 0 &&
                <div>
                    <h2>아이디 찾기 결과</h2>
                    {
                        isHaveId.map((id, index) => <li key={index}>{id.memberId}</li>)
                    }
                </div>
            }
            <div>
                <button
                    onClick={onClickHomeHandler}
                >
                    HOME
                </button>
            </div>
        </>
    );
}