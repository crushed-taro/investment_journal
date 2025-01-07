import { useNavigate } from "react-router-dom";

export default function Main() {

    const isLogin = window.localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const onClickAddInvestmentJournalHandler = () => {
        navigate("/main/addInvestmentJournal", { replace: true });
    };

    function AfterLogin() {
        return (
            <>
                <h2>투자일지 목록입니다.</h2>
                <button
                    onClick={onClickAddInvestmentJournalHandler}
                >
                    투자일지 추가
                </button>
            </>
        );
    }

    function BeforeLogin() {
        return (
            <>
                <h1>투자일지 목록을 불러올 수 없습니다.</h1>           
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