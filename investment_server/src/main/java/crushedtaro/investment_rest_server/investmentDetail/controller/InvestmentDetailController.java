package crushedtaro.investment_rest_server.investmentDetail.controller;

import crushedtaro.investment_rest_server.common.ResponseDTO;
import crushedtaro.investment_rest_server.investmentDetail.dto.InvestmentDetailDTO;
import crushedtaro.investment_rest_server.investmentDetail.service.InvestmentDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/list/{investmentCode}")
    public ResponseEntity<ResponseDTO> list(@PathVariable int investmentCode) {
        return ResponseEntity.ok().body(new ResponseDTO(HttpStatus.OK, "투자일지상세내역 찾기 성공", investmentDetailService.list(investmentCode)));
    }
}
