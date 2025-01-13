package crushedtaro.investment_rest_server.investment.dto;

public class InvestmentDTO {

    private int investmentCode;
    private int memberCode;
    private String investmentTitle;
    private String investmentDate;
    private String investmentContents;

    public InvestmentDTO() {
    }

    public InvestmentDTO(int investmentCode, int memberCode, String investmentTitle, String investmentDate, String investmentContents) {
        this.investmentCode = investmentCode;
        this.memberCode = memberCode;
        this.investmentTitle = investmentTitle;
        this.investmentDate = investmentDate;
        this.investmentContents = investmentContents;
    }

    public int getInvestmentCode() {
        return investmentCode;
    }

    public void setInvestmentCode(int investmentCode) {
        this.investmentCode = investmentCode;
    }

    public int getMemberCode() {
        return memberCode;
    }

    public void setMemberCode(int memberCode) {
        this.memberCode = memberCode;
    }

    public String getInvestmentTitle() {
        return investmentTitle;
    }

    public void setInvestmentTitle(String investmentTitle) {
        this.investmentTitle = investmentTitle;
    }

    public String getInvestmentDate() {
        return investmentDate;
    }

    public void setInvestmentDate(String investmentDate) {
        this.investmentDate = investmentDate;
    }

    public String getInvestmentContents() {
        return investmentContents;
    }

    public void setInvestmentContents(String investmentContents) {
        this.investmentContents = investmentContents;
    }

    @Override
    public String toString() {
        return "InvestmentDTO{" +
                "investmentCode=" + investmentCode +
                ", memberCode=" + memberCode +
                ", investmentTitle='" + investmentTitle + '\'' +
                ", investmentDate='" + investmentDate + '\'' +
                ", investmentContents='" + investmentContents + '\'' +
                '}';
    }
}
