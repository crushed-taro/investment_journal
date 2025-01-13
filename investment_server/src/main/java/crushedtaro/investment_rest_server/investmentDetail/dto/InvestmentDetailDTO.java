package crushedtaro.investment_rest_server.investmentDetail.dto;

import crushedtaro.investment_rest_server.investmentDetail.entity.InvestmentDetail;

public class InvestmentDetailDTO {

    private int investmentDetailCode;
    private int investmentCode;
    private String investmentTicker;
    private int investmentStock;
    private int investmentSale;

    public InvestmentDetailDTO() {}

    public InvestmentDetailDTO(int investmentDetailCode, int investmentCode, String investmentTicker, int investmentStock, int investmentSale) {
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
        return "InvestmentDetailDTO{" +
                "investmentDetailCode=" + investmentDetailCode +
                ", investmentCode=" + investmentCode +
                ", investmentTicker='" + investmentTicker + '\'' +
                ", investmentStock=" + investmentStock +
                ", investmentSale=" + investmentSale +
                '}';
    }
}
