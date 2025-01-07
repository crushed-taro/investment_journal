

export default function AddInvestmentJournal() {
    return(
        <>
            <h1>투자일지 추가 화면</h1>

            <label> 투자 날짜 : </label>
            <input />
            <br />
            <label>투자 일지 제목 : </label>
            <input />
            <br />
            <label>투자 일지 내용 : </label>
            <input />

            <div>
                <button>
                    자산 추가
                </button>
                <div>
                    <span>종목 티커명</span>
                    <span>수량</span>
                    <span>매수가격</span>
                </div>
            </div>
        </>

    );
}