package com.comssanet.comssanet.controller;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.dto.BoardResponse;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/board")
    public ResponseEntity<Long> register(@RequestBody BoardWriteDTO boardWriteDTO) {
        try {
            Long id = boardService.write(boardWriteDTO);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/board/{id}")
    public ResponseEntity<BoardResponse> getBoard(@PathVariable Long id){
        try{
            BoardResponse board = boardService.getById(id);
            return new ResponseEntity<>(board,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    //TODO 페이징처리
    @GetMapping("/boards/{type}")
    public ResponseEntity<List<BoardResponse>> getBoardAll(@PathVariable BoardType type){
        try {
            List<BoardResponse> boardList = boardService.getAll(type);
            return new ResponseEntity<>(boardList, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

}
