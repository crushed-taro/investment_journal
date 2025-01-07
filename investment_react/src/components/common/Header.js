import { useNavigate } from "react-router-dom";

export default function Header() {

    const isLogin = window.localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate("/", {replace: true});
    };

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        navigate("/", {replace: true});
    };

    function AfterLogin() {
        return (
            <>
                <div>
                    <button
                        onClick={onClickLogoHandler}
                    >
                        MAIN
                    </button>
                    <span>
                        |
                    </span>
                    <button
                        onClick={onClickLogoutHandler}
                    >
                        로그아웃
                    </button>
                </div>
            </>
        );
    }

    function BeforeLogin() {
        return (
            <>
                <div>
                    <span>로그인이 필요합니다.</span>           
                    <span>
                        |
                    </span>
                    <button
                        onClick={onClickLogoHandler}
                    >
                        MAIN
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            {
                isLogin == null || isLogin === undefined ? 
                (
                    <BeforeLogin/>
                )
                :
                (
                    <AfterLogin/>
                )
            }
        </>
    );

}