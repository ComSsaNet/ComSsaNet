package com.comssanet.comssanet.domain;

import com.comssanet.comssanet.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberTest {

    @Autowired
    MemberRepository memberRepository;

    @Test
    public void 멤버넣기테스트() throws Exception {
        //given
        Member member1 = Member.builder().nickname("comssanet").build();
        Member member = memberRepository.save(member1);
        //when
        Optional<Member> one = memberRepository.findById(member.getUserId());
        System.out.println(one.get());
        //then
    }
}