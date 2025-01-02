

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
                user: {
                    email: form.Id,
                    password: form.Password,
                }
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