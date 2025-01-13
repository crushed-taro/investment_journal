package crushedtaro.investment_rest_server.investmentDetail.service;

import crushedtaro.investment_rest_server.investment.entity.Investment;
import crushedtaro.investment_rest_server.investment.service.InvestmentService;
import crushedtaro.investment_rest_server.investmentDetail.InvestmentDetailRepository;
import crushedtaro.investment_rest_server.investmentDetail.dto.InvestmentDetailDTO;
import crushedtaro.investment_rest_server.investmentDetail.entity.InvestmentDetail;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class InvestmentDetailService {

    private static final Logger log = LoggerFactory.getLogger(InvestmentDetailService.class);
    private final ModelMapper modelMapper;
    private final InvestmentDetailRepository investmentDetailRepository;

    @Autowired
    public InvestmentDetailService(ModelMapper modelMapper, InvestmentDetailRepository investmentDetailRepository) {
        this.modelMapper = modelMapper;
        this.investmentDetailRepository = investmentDetailRepository;
    }

    @Transactional
    public InvestmentDetailDTO register(InvestmentDetailDTO investmentDetailDTO) {
        log.info("[InvestmentDetailService] register() Start...");
        log.info("[InvestmentDetailService] investmentDetailDTO {}", investmentDetailDTO);

        InvestmentDetail investmentDetail = modelMapper.map(investmentDetailDTO, InvestmentDetail.class);

        InvestmentDetail result = investmentDetailRepository.save(investmentDetail);

        log.info("[InvestmentDetailService] InvestmentDetail Insert Result {}",
                (result != null) ? "자산 추가 성공" : "자산 추가 실패");

        log.info("[InvestmentDetailService] register() End...");
        return investmentDetailDTO;
    }

    public Object list(int investmentCode) {
        log.info("[InvestmentDetailService] list() Start...");
        log.info("[InvestmentDetailService] investmentCode {}", investmentCode);

        List<InvestmentDetail> investmentsDetail = investmentDetailRepository.findByInvestmentCode(investmentCode);

        log.info("[InvestmentDetailService] list() End...");
        return investmentsDetail;
    }
}
