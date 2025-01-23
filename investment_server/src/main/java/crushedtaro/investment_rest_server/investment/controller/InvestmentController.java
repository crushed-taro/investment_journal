package crushedtaro.investment_rest_server.investment.controller;

import crushedtaro.investment_rest_server.common.ResponseDTO;
import crushedtaro.investment_rest_server.investment.dto.InvestmentDTO;
import crushedtaro.investment_rest_server.investment.entity.Investment;
import crushedtaro.investment_rest_server.investment.service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/invest")
public class InvestmentController {

    private final InvestmentService investmentService;

    @Autowired
    public InvestmentController(InvestmentService investmentService) {
        this.investmentService = investmentService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody InvestmentDTO investmentDTO) {
        return ResponseEntity.ok().body(new ResponseDTO(HttpStatus.CREATED, "투자일지 등록 성공", investmentService.register(investmentDTO)));
    }

    @GetMapping("/list/{memberCode}")
    public ResponseEntity<ResponseDTO> list(@PathVariable int memberCode) {
        return ResponseEntity.ok().body(new ResponseDTO(HttpStatus.OK, "투자일지 찾기 성공", investmentService.list(memberCode)));
    }

    @DeleteMapping("/delete/{investmentCode}")
    public ResponseEntity<ResponseDTO> delete(@PathVariable int investmentCode) {
        return ResponseEntity.ok().body(new ResponseDTO(HttpStatus.OK, "투자일지 삭제 성공", investmentService.delete(investmentCode)));
    }
}
