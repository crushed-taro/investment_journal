package crushedtaro.investment_rest_server.jwt;

import crushedtaro.investment_rest_server.member.dto.TokenDTO;
import crushedtaro.investment_rest_server.member.entity.Member;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class TokenProvider {

    private static final Logger log = LoggerFactory.getLogger(TokenProvider.class);
    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 60;
    private static final String BEARER_TYPE = "bearer";

    private final Key key;

    public TokenProvider(@Value("${jwt.secret}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public TokenDTO generateTokenDTO(Member member) {
        log.info("[TokenProvider] generateTokenDTO() Start");

        // 현재 시간(msec)
        long now = System.currentTimeMillis();
        Date accessTokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);

        // 권한 없이 간단히 회원 정보만 포함한 토큰 생성
        String accessToken = Jwts.builder()
                .setSubject(member.getMemberId()) // 회원 ID 추가
                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        System.out.println("조립된 accessToken 확인 = " + accessToken);

        log.info("[TokenProvider] generateTokenDTO() End");

        return new TokenDTO(BEARER_TYPE, member.getMemberName(), accessToken, accessTokenExpiresIn.getTime());
    }

}
