package crushedtaro.investment_rest_server.investment.repository;

import crushedtaro.investment_rest_server.investment.entity.Investment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestmentRepository extends JpaRepository<Investment, Integer> {
}
