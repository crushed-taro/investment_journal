package crushedtaro.investment_rest_server.member.dto;

public class TokenDTO {

    private String grantType;
    private String memberName;
    private Integer memberCode;
    private String accessToken;
    private Long accessTokenExpiresIn;

    public TokenDTO(String grantType, String memberName, Integer memberCode, String accessToken, Long accessTokenExpiresIn) {
        this.grantType = grantType;
        this.memberName = memberName;
        this.memberCode = memberCode;
        this.accessToken = accessToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }

    public TokenDTO() {
    }

    public Integer getMemberCode() {
        return memberCode;
    }

    public void setMemberCode(Integer memberCode) {
        this.memberCode = memberCode;
    }

    public String getGrantType() {
        return grantType;
    }

    public void setGrantType(String grantType) {
        this.grantType = grantType;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Long getAccessTokenExpiresIn() {
        return accessTokenExpiresIn;
    }

    public void setAccessTokenExpiresIn(Long accessTokenExpiresIn) {
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }

    @Override
    public String toString() {
        return "TokenDTO{" +
                "grantType='" + grantType + '\'' +
                ", memberName='" + memberName + '\'' +
                ", memberCode=" + memberCode +
                ", accessToken='" + accessToken + '\'' +
                ", accessTokenExpiresIn=" + accessTokenExpiresIn +
                '}';
    }
}
