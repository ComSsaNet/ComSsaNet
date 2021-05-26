package com.comssanet.comssanet.repository;

import com.comssanet.comssanet.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
