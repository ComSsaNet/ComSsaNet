package com.comssanet.comssanet.repository;

import com.comssanet.comssanet.domain.Board;
import com.comssanet.comssanet.enums.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByBoardType(BoardType boardType);
}
