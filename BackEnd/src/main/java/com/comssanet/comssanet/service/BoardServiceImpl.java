package com.comssanet.comssanet.service;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.domain.Member;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.repository.BoardRepository;
import com.comssanet.comssanet.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;

    private final MemberRepository memberRepository;

    private final ModelMapper modelMapper;

    //TODO : Exception 정의
    @Override
    public Long write(BoardWriteDTO boardWriteDTO) throws Exception{
        Optional<Member> writeMember = memberRepository.findById(boardWriteDTO.getUserId());
        if (!writeMember.isPresent()){
            throw new Exception();
        }
        Board newBoard = modelMapper.map(boardWriteDTO,Board.class);
        newBoard.writeMember(writeMember.get());
        boardRepository.save(newBoard);
        return newBoard.getBoardId();
    }
}
