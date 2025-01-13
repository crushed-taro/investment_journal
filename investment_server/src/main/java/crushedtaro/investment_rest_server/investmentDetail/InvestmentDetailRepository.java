package crushedtaro.investment_rest_server.investmentDetail;

import crushedtaro.investment_rest_server.investment.entity.Investment;
import crushedtaro.investment_rest_server.investmentDetail.entity.InvestmentDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvestmentDetailRepository extends JpaRepository<InvestmentDetail, Integer> {
    List<InvestmentDetail> findByInvestmentCode(int investmentCode);
}
