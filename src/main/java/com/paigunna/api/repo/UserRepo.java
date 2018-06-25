package com.paigunna.api.repo;

import com.paigunna.api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Arm
 */
public interface UserRepo extends JpaRepository<User, Long> {

    User findById(String id);
}
