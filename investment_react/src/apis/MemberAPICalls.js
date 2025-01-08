import { 
    POST_REGISTER, 
    POST_FINDID,
    POST_FINDPASSWORD, 
    PUT_CHANGPASSWORD,
    POST_LOGIN
} from "../modules/MemberModule";

export const callRegisterAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_REGISTER_URL;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                memberName: form.Name,
                memberId: form.Id,
                memberPassword: form.Password,
            }),
        }).then((response) => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);

		if (result.status === 201) {
            alert("회원가입이 완료되었습니다.");
		} else {
			alert("등록된 이메일이 있습니다.");
		}
        dispatch({ type: POST_REGISTER, payload: result });
        return result;
    };
}

export const callFindIdAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_FINDID_URL;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                memberName: form.Name,
            }),
        }).then((response) => response.json());

        console.log('[MemberAPICalls] callFindIdAPI RESULT : ', result);

		if (result.status === 200) {
            alert("아이디를 찾았습니다.");
		} else {
			alert("가입된 ID가 없습니다.");
		}
        dispatch({ type: POST_FINDID, payload: result.data });
        return result;
    };
}

export const callFindPasswordAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_FINDPASSWORD_URL;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                memberName: form.Name,
                memberId: form.Id,
            }),
        }).then((response) => response.json());

        console.log('[MemberAPICalls] callFindPasswordAPI RESULT : ', result);

		if (result.status === 200) {
            alert("비밀번호를 찾았습니다.");
		} else {
			alert("가입된 ID가 없습니다.");
		}
        dispatch({ type: POST_FINDPASSWORD, payload: result });
        return result;
    };
}

export const callChangePasswordAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_CHANGEPASSWORD_URL;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                memberName: form.Name,
                memberId: form.Id,
                memberPassword: form.Password,
            }),
        }).then((response) => response.json());

        console.log('[MemberAPICalls] callChangePasswordAPI RESULT : ', result);

		if (result.status === 200) {
            alert("비밀번호 변경이 완료되었습니다.");
		} else {
			alert("비밀번호 변경에 실패했습니다.");
		}
        dispatch({ type: PUT_CHANGPASSWORD, payload: result });
        return result;
    };
}

export const callLoginAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_LOGIN_URL;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                memberId: form.Id,
                memberPassword: form.Password,
            }),
        }).then((response) => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);

		if (result.status === 200) {
            window.localStorage.setItem("accessToken", result.data.accessToken);
            window.localStorage.setItem("code", result.data.memberCode);
            alert("로그인을 성공했습니다.");
		} else {
			alert("로그인을 실패했습니다.");
		}
        dispatch({ type: POST_LOGIN, payload: result });
        return result;
    };
}