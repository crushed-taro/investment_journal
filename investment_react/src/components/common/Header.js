

export default function Header() {

    const isLogin = window.localStorage.getItem('accessToken');

    function AfterLogin() {
        return (
            <h2>로그인 되었습니다.</h2>           
        );
    }

    function BeforeLogin() {
        return (
            <h2>로그아웃 되었습니다.</h2>           
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