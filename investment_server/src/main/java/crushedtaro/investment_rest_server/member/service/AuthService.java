package crushedtaro.investment_rest_server.member.service;

import crushedtaro.investment_rest_server.jwt.TokenProvider;
import crushedtaro.investment_rest_server.member.dto.MemberDTO;
import crushedtaro.investment_rest_server.member.dto.TokenDTO;
import crushedtaro.investment_rest_server.member.entity.Member;
import crushedtaro.investment_rest_server.member.repository.MemberRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
    private final MemberRepository memberRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    @Autowired
    public AuthService(MemberRepository memberRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder, TokenProvider tokenProvider) {
        this.memberRepository = memberRepository;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }


    @Transactional
    public MemberDTO signup(MemberDTO memberDTO) {
        log.info("[AuthService] signup() Start...");
        log.info("[AuthService] MemberDTO {}", memberDTO);

        if(memberRepository.findByMemberId(memberDTO.getMemberId()) != null) {
            log.info("[AuthService] 이메일이 중복됩니다.");
            throw new RuntimeException("이메일이 중복됩니다.");
        }

        Member registMember = modelMapper.map(memberDTO, Member.class);

        registMember.setMemberPassword(passwordEncoder.encode(registMember.getMemberPassword()));
        Member result = memberRepository.save(registMember);

        log.info("[AuthService] Member Insert Result {}",
                (result != null) ? "회원가입 성공" : "회원가입 실패");

        log.info("[AuthService] signup() End...");
        return memberDTO;
    }

    public Object login(MemberDTO memberDTO) {
        log.info("[AuthService] login() Start...");
        log.info("[AuthService] MemberDTO {}", memberDTO);

        Member member = memberRepository.findByMemberId(memberDTO.getMemberId());

        if(member == null) {
            log.info("[AuthService] 유저를 찾을 수 없습니다.");
            throw new RuntimeException(memberDTO.getMemberId() + " 유저를 찾을 수 없습니다.");
        }

        if(!passwordEncoder.matches(memberDTO.getMemberPassword(), member.getMemberPassword())) {
            log.info("[AuthService] 잘못된 비밀번호 입니다.");
            throw new RuntimeException("잘못된 비밀번호 입니다.");
        }

        return tokenProvider.generateTokenDTO(member);
    }

    public Object findid(MemberDTO memberDTO) {
        log.info("[AuthService] findid() Start...");
        log.info("[AuthService] MemberDTO {}", memberDTO);

        Member member = memberRepository.findByMemberName(memberDTO.getMemberName());

        if(member == null) {
            log.info("[AuthService] 유저를 찾을 수 없습니다.");
            throw new RuntimeException("유저를 찾을 수 없습니다.");
        }

        log.info("[AuthService] findid() End...");
        return member;
    }
}
