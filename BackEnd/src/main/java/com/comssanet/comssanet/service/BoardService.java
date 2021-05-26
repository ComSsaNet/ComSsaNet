package com.comssanet.comssanet.service;

import com.comssanet.comssanet.dto.BoardWriteDTO;

public interface BoardService {
    Long write(BoardWriteDTO boardWriteDTO) throws Exception;
}
