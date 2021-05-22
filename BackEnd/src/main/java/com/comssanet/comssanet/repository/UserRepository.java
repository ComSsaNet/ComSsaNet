package com.comssanet.comssanet.repository;

import com.comssanet.comssanet.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
