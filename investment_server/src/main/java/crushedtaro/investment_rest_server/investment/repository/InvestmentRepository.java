package crushedtaro.investment_rest_server.investment.repository;

import crushedtaro.investment_rest_server.investment.entity.Investment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface InvestmentRepository extends JpaRepository<Investment, Integer> {

    @Query("SELECT MAX(i.investmentCode) FROM Investment i")
    Optional<Long> findMaxInvestmentCode();
}
