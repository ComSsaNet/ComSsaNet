package com.comssanet.comssanet.repository;

import com.comssanet.comssanet.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
