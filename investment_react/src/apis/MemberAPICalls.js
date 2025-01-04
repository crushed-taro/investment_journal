import { POST_REGISTER, POST_FINDID } from "../modules/MemberModule";

export const callRegisterAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_REGISTER_URL;
    console.log()

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
            dispatch({ type: POST_REGISTER, payload: result });
		} else {
			alert("등록된 이메일이 있습니다.");
		}
    };
}

export const callFindIdAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_FINDID_URL;
    console.log()

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
            dispatch({ type: POST_FINDID, payload: result.data });
		} else {
			alert("가입된 ID가 없습니다.");
		}
    };
}