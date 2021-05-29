package com.comssanet.comssanet.service;

import com.comssanet.comssanet.dto.BoardResponse;
import com.comssanet.comssanet.dto.BoardWriteDTO;
import com.comssanet.comssanet.enums.BoardType;

import java.util.List;

public interface BoardService {
    Long write(BoardWriteDTO boardWriteDTO) throws Exception;

    List<BoardResponse> getAll(BoardType boardType) throws Exception;

    BoardResponse getById(Long id) throws Exception;
}
