package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    private final ModelMapper modelMapper;

    @Override
    public Long join(MemberDTO memberDTO) {
        // 중복 처리 로직
        Member newMember = modelMapper.map(memberDTO, Member.class);
        memberRepository.save(newMember);
        return newMember.getUserId();
    }
}
