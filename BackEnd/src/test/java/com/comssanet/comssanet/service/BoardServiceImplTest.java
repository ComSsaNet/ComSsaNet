package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.repository.BoardRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class BoardServiceImplTest {

    @Autowired
    BoardRepository boardRepository;
    
    @Autowired
    BoardService boardService;

    @Autowired
    MemberService memberService;

    @Test
    public void 글등록_테스트() throws Exception {
        //given
        String name = "member1";
        String password = "aaaa";

        String boardTitle = "boardTitle";
        String boardDescription = "boardDescription";
        BoardType boardType = BoardType.QUESTION;
        
        MemberDTO memberDTO = MemberDTO.builder().password(password)
                .nickname(name)
                .build();

        BoardWriteDTO boardWriteDTO = BoardWriteDTO.builder()
                .title(boardTitle)
                .description(boardDescription)
                .boardType(boardType)
                .build();
        
        //when
        Long userId = memberService.join(memberDTO);
        boardWriteDTO.setUserId(userId);
        Long boardId = boardService.write(boardWriteDTO);
        //then
        Optional<Board> newBoard = boardRepository.findById(boardId);
        if(newBoard.isPresent()){
            Board board = newBoard.get();
            Assertions.assertThat(board.getMember().getUserId()).isEqualTo(userId);
            Assertions.assertThat(board.getTitle()).isEqualTo(boardTitle);
        }
        else
            fail("글 등록에 실패했습니다..");
    }
}