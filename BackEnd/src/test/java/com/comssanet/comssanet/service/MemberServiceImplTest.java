package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.enums.LoginType;
import com.comssanet.comssanet.repository.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceImplTest {

    @Autowired
    private MemberService memberService;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void 회원가입테스트() throws Exception {
        //given
        String name = "member1";
        MemberDTO memberDTO = MemberDTO.builder().password("aaaa")
                .nickname(name)
                .build();

        //when
        System.out.println(memberDTO.getNickname());
        Long join = memberService.join(memberDTO);
        Optional<Member> getMember = memberRepository.findById(join);
        //then
        System.out.println("AAAA" + getMember.get());
        if (getMember.isPresent()) {
            Assertions.assertThat("member1").isEqualTo(getMember.get().getNickname());
            //Assertions.assertThat(LoginType.GENERAL).isEqualTo(getMember.get().getLoginType());
        }
        else
            fail("회원이 없습니다..");
    }
}