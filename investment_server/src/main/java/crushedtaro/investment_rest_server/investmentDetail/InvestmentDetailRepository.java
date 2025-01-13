package crushedtaro.investment_rest_server.investmentDetail;

import crushedtaro.investment_rest_server.investmentDetail.entity.InvestmentDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestmentDetailRepository extends JpaRepository<InvestmentDetail, Integer> {
}
