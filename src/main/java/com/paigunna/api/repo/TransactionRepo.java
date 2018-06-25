package com.paigunna.api.repo;

import com.paigunna.api.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Arm
 */
public interface TransactionRepo extends JpaRepository<Transaction, Long> {
}
