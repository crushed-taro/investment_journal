package crushedtaro.investment_rest_server.investmentDetail.controller;

import crushedtaro.investment_rest_server.common.ResponseDTO;
import crushedtaro.investment_rest_server.investmentDetail.dto.InvestmentDetailDTO;
import crushedtaro.investment_rest_server.investmentDetail.service.InvestmentDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/invest_detail")
public class InvestmentDetailController {

    private final InvestmentDetailService investmentDetailService;

    @Autowired
    public InvestmentDetailController(InvestmentDetailService investmentDetailService) {
        this.investmentDetailService = investmentDetailService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody InvestmentDetailDTO investmentDetailDTO) {
        return ResponseEntity.ok().body(new ResponseDTO(HttpStatus.CREATED, "자산 등록 성공", investmentDetailService.register(investmentDetailDTO)));
    }
}
