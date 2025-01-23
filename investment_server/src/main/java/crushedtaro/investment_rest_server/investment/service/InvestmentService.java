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

import java.util.List;
import java.util.Optional;

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

        Optional<Long> maxInvestmentCode = investmentRepository.findMaxInvestmentCode();
        if (maxInvestmentCode.isPresent()) {
            log.info("[InvestmentService] Max InvestmentCode: {}", maxInvestmentCode.get());
            investmentDTO.setInvestmentCode(Math.toIntExact(maxInvestmentCode.get()));
        } else {
            log.info("[InvestmentService] No investment records found.");
        }

        log.info("[InvestmentService] register() End...");
        return investmentDTO;
    }

    public Object list(int memberCode) {
        log.info("[InvestmentService] list() Start...");
        log.info("[InvestmentService] memberCode {}", memberCode);

        List<Investment> investments = investmentRepository.findByMemberCode(memberCode);

//        if(investments == null) {
//            log.info("[InvestmentService] 투자일지를 찾을 수 없습니다.");
//            throw new RuntimeException("투자일지를 찾을 수 없습니다.");
//        }

        log.info("[InvestmentService] list() End...");
        return investments;
    }

    @Transactional
    public Object delete(int investmentCode) {
        log.info("[InvestmentService] delete() Start...");
        log.info("[InvestmentService] investmentCode {}", investmentCode);

        int result = 0;

        try {
            investmentRepository.deleteById(investmentCode);

            result = 1;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return (result > 0) ? "투자일지 삭제 성공" : "투자일지 삭제 실패";
    }
}
