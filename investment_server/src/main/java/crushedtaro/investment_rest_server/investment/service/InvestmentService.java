package crushedtaro.investment_rest_server.investment.service;

import crushedtaro.investment_rest_server.investment.dto.InvestmentDTO;
import crushedtaro.investment_rest_server.investment.entity.Investment;
import crushedtaro.investment_rest_server.investment.repository.InvestmentRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InvestmentService {

    private static final Logger log = LoggerFactory.getLogger(InvestmentService.class);
    private final ModelMapper modelMapper;
    private final InvestmentRepository investmentRepository;

    @Autowired
    public InvestmentService(ModelMapper modelMapper, InvestmentRepository investmentRepository) {
        this.modelMapper = modelMapper;
        this.investmentRepository = investmentRepository;
    }

    @Transactional
    public InvestmentDTO register(InvestmentDTO investmentDTO) {
        log.info("[InvestmentService] register() Start...");
        log.info("[InvestmentService] investmentDTO {}", investmentDTO);

        Investment investment = modelMapper.map(investmentDTO, Investment.class);

        Investment result = investmentRepository.save(investment);

        log.info("[InvestmentService] Investment Insert Result {}",
                (result != null) ? "투자일지 추가 성공" : "투자일지 추가 실패");

        log.info("[InvestmentService] register() End...");
        return investmentDTO;
    }
}
