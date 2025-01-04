package crushedtaro.investment_rest_server.member.controller;

import crushedtaro.investment_rest_server.common.ResponseDTO;
import crushedtaro.investment_rest_server.member.dto.MemberDTO;
import crushedtaro.investment_rest_server.member.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody MemberDTO memberDTO) {
        return ResponseEntity
                .ok()
                .body(new ResponseDTO(HttpStatus.CREATED, "회원가입 성공", authService.signup(memberDTO)));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody MemberDTO memberDTO) {
        return ResponseEntity
                .ok()
                .body(new ResponseDTO(HttpStatus.OK, "로그인 성공", authService.login(memberDTO)));
    }

    @PostMapping("/findid")
    public ResponseEntity<ResponseDTO> findid(@RequestBody MemberDTO memberDTO) {
        return ResponseEntity
                .ok()
                .body(new ResponseDTO(HttpStatus.OK, "아이디 찾기 성공", authService.findid(memberDTO)));
    }

}
