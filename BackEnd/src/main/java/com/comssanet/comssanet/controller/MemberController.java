package com.comssanet.comssanet.controller;

import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping()
    public ResponseEntity<Long> register(@RequestBody MemberDTO memberDTO) {
        Long id = memberService.join(memberDTO);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
