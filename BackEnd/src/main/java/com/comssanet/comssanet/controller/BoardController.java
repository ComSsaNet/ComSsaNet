package com.comssanet.comssanet.controller;

import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping()
    public ResponseEntity<Long> register(@RequestBody BoardWriteDTO boardWriteDTO) {
        try {
            Long id = boardService.write(boardWriteDTO);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

}
