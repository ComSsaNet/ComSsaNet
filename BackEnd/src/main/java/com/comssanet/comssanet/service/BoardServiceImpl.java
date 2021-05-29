package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.BoardResponse;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.repository.BoardRepository;
import com.comssanet.comssanet.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;

    private final MemberRepository memberRepository;

    private final ModelMapper modelMapper;

    //TODO : Exception 정의
//    @Transactional
    @Override
    public Long write(BoardWriteDTO boardWriteDTO) throws Exception{
        Optional<Member> writeMember = memberRepository.findById(boardWriteDTO.getMemberId());
        if (!writeMember.isPresent()){
            throw new Exception();
        }
        Member member = writeMember.get();
        Board newBoard = Board.builder()
                .member(member)
                .description(boardWriteDTO.getDescription())
                .title(boardWriteDTO.getTitle())
                .boardType(boardWriteDTO.getBoardType())
                .build();
        //이 부분 실행하면 newBoard의 boardId가 1L 값으로 셋팅되는 이유가 뭔지 모르겠습니다
//        newBoard = modelMapper.map(boardWriteDTO,Board.class);
        boardRepository.save(newBoard);
        return newBoard.getBoardId();
    }

    @Override
    public List<BoardResponse> getAll(BoardType boardType) {
        List<Board> boardList = boardRepository.findByBoardType(boardType);
        List<BoardResponse> list = boardList.stream()
                .map(this::boardToDTO)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public BoardResponse getById(Long id) throws Exception {
        Optional<Board> findBoard = boardRepository.findById(id);
        if(!findBoard.isPresent()){
            throw new Exception();
        }
        BoardResponse board = modelMapper.map(findBoard.get(),BoardResponse.class);
        return board;
    }


    private BoardResponse boardToDTO(Board board) {
        BoardResponse boardDTO = modelMapper.map(board,BoardResponse.class);
        return boardDTO;
    }
}
