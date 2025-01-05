package crushedtaro.investment_rest_server.member.repository;

import crushedtaro.investment_rest_server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByMemberId(String memberId);


    Member findByMemberNameAndMemberId(String memberName, String memberId);

    List<Member> findByMemberName(String memberName);
}
