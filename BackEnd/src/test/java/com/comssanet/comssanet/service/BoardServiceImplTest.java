package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.BoardResponse;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.dto.MemberDTO;
import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.repository.BoardRepository;
import com.comssanet.comssanet.repository.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class BoardServiceImplTest {

    @Autowired
    BoardRepository boardRepository;
    
    @Autowired
    BoardService boardService;

    @Autowired
    MemberService memberService;

    @Autowired
    MemberRepository memberRepository;

    @Spy
    ModelMapper modelMapper;

    @Test
    public void 글등록_테스트() throws Exception {
        //given
        List<Member> members = memberRepository.findAll();
        Long memberId = -1L;
        if(members.size()!=0){
            memberId = members.get(members.size()-1).getUserId();
        }else{
            String name = "member1";
            String password = "aaaa";

            MemberDTO memberDTO = MemberDTO.builder().password(password)
                    .nickname(name)
                    .build();
            memberId = memberService.join(memberDTO);
        }
        System.out.println("글을 쓴 유저 : " + memberId);

        String boardTitle = "boardTitle";
        String boardDescription = "boardDescription";
//        BoardType boardType = BoardType.QUESTION;
        BoardType boardType = BoardType.SUGGESTION;

        BoardWriteDTO boardWriteDTO = BoardWriteDTO.builder()
                .title(boardTitle)
                .description(boardDescription)
                .boardType(boardType)
                .memberId(memberId)
                .build();
        //when

        Long boardId = boardService.write(boardWriteDTO);
        //then
        Optional<Board> newBoard = boardRepository.findById(boardId);
        if(newBoard.isPresent()){
            Board board = newBoard.get();
            Assertions.assertThat(board.getMember().getUserId()).isEqualTo(memberId);
            Assertions.assertThat(board.getTitle()).isEqualTo(boardTitle);
        }
        else
            fail("글 등록에 실패했습니다..");
    }

    @Test
    public void 글_타입에따라_모두조회() throws Exception {
        //given
        List<Board> list = new ArrayList<Board>();
        list = boardRepository.findAll();
//        list = boardRepository.findByBoardType(BoardType.QUESTION);
        System.out.println(list.size());
    }

    @Test
    public void id로_글조회() throws Exception {
        //given
        List<Board> boardList = boardRepository.findAll();
        if(boardList.size()==0){
            fail("글이 하나도 없습니다");
        }
        Long randomBoardId = (long)(Math.random() % boardList.size());

        BoardResponse board = boardService.getById(randomBoardId);

//        System.out.println(list.size());
    }
}