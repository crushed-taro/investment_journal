package crushedtaro.investment_rest_server.investment.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_investment")
public class Investment {

    @Id
    @Column(name = "investment_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int investmentCode;

    @Column(name = "member_code")
    private int memberCode;

    @Column(name = "investment_title")
    private String investmentTitle;

    @Column(name = "investment_date")
    private String investmentDate;

    @Column(name = "investment_contents")
    private String investmentContents;

    public Investment(int investmentCode, int memberCode, String investmentTitle, String investmentDate, String investmentContents) {
        this.investmentCode = investmentCode;
        this.memberCode = memberCode;
        this.investmentTitle = investmentTitle;
        this.investmentDate = investmentDate;
        this.investmentContents = investmentContents;
    }

    public Investment() {
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
        return "Investment{" +
                "investmentCode=" + investmentCode +
                ", memberCode=" + memberCode +
                ", investmentTitle='" + investmentTitle + '\'' +
                ", investmentDate='" + investmentDate + '\'' +
                ", investmentContents='" + investmentContents + '\'' +
                '}';
    }
}
