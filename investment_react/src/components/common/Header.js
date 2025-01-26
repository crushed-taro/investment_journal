import { useNavigate } from "react-router-dom";
import './Header.css';  

export default function Header() {

    const isLogin = window.localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate("/main", {replace: true});
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
                    <button
                        onClick={onClickLogoutHandler}
                    >
                        로그인
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="headerContainer">
                <div className="logoContainer">
                    <a href="" className="logo" onClick={onClickLogoHandler}>
                        <img
                            src="/images/HomeLogo.jpeg"
                            alt="logo"
                        />
                    </a>
                </div>
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
            </div>
        </>
    );

}