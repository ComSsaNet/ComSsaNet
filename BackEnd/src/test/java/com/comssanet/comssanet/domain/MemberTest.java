package com.comssanet.comssanet.domain;

import com.comssanet.comssanet.enums.Role;
import com.comssanet.comssanet.repository.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    EntityManager entityManager;


    @Test
    public void 멤버넣기테스트() throws Exception {
        //given
        Member member1 = Member.builder().nickname("comssanet").role(Role.ADMIN).build();
        Member member = memberRepository.save(member1);
        //when
        Optional<Member> one = memberRepository.findById(member.getUserId());
        System.out.println(one.get());
        //then
    }

    @Test
    public void 날짜수정테스트() throws Exception {
        //given
        LocalDateTime now = LocalDateTime.now();
        List<Member> all = memberRepository.findAll();

        if (!all.isEmpty()) {
            Member member;
            member = all.get(0);
            LocalDateTime currModDate = member.getModDate();
            member.changeNickname("change");

            memberRepository.save(member);

            Assertions.assertThat(member.getModDate()).isEqualTo(currModDate);
        }
        //when

        //then
    }
}