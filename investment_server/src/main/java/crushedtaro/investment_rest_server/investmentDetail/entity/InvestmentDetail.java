package crushedtaro.investment_rest_server.investmentDetail.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_investment_detail")
public class InvestmentDetail {

    @Id
    @Column(name = "investment_detail_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int investmentDetailCode;

    @Column(name = "investment_code")
    private int investmentCode;

    @Column(name = "investment_ticker")
    private String investmentTicker;

    @Column(name = "investment_stock")
    private int investmentStock;

    @Column(name = "investment_sale")
    private int investmentSale;

    public InvestmentDetail() {
    }

    public InvestmentDetail(int investmentDetailCode, int investmentCode, String investmentTicker, int investmentStock, int investmentSale) {
        this.investmentDetailCode = investmentDetailCode;
        this.investmentCode = investmentCode;
        this.investmentTicker = investmentTicker;
        this.investmentStock = investmentStock;
        this.investmentSale = investmentSale;
    }

    public int getInvestmentDetailCode() {
        return investmentDetailCode;
    }

    public void setInvestmentDetailCode(int investmentDetailCode) {
        this.investmentDetailCode = investmentDetailCode;
    }

    public int getInvestmentCode() {
        return investmentCode;
    }

    public void setInvestmentCode(int investmentCode) {
        this.investmentCode = investmentCode;
    }

    public String getInvestmentTicker() {
        return investmentTicker;
    }

    public void setInvestmentTicker(String investmentTicker) {
        this.investmentTicker = investmentTicker;
    }

    public int getInvestmentStock() {
        return investmentStock;
    }

    public void setInvestmentStock(int investmentStock) {
        this.investmentStock = investmentStock;
    }

    public int getInvestmentSale() {
        return investmentSale;
    }

    public void setInvestmentSale(int investmentSale) {
        this.investmentSale = investmentSale;
    }

    @Override
    public String toString() {
        return "InvestmentDetail{" +
                "investmentDetailCode=" + investmentDetailCode +
                ", investmentCode=" + investmentCode +
                ", investmentTicker='" + investmentTicker + '\'' +
                ", investmentStock=" + investmentStock +
                ", investmentSale=" + investmentSale +
                '}';
    }
}
