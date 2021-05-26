package com.comssanet.comssanet.service;

import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.repository.MemberRepository;

public interface MemberService {

    Long join(MemberDTO memberDTO);
}
