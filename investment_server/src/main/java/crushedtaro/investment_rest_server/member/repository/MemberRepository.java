package crushedtaro.investment_rest_server.member.repository;

import crushedtaro.investment_rest_server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByMemberId(String memberId);
}
