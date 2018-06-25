package com.paigunna.api.service;

import com.paigunna.api.domain.Transaction;
import com.paigunna.api.repo.TransactionRepo;
import com.paigunna.api.resource.dto.TransactionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Arm
 */
@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;

    @Override
    public Transaction save(Transaction transaction) {
        return transactionRepo.save(transaction);
    }

    @Override
    public List<Transaction> search(TransactionDto transactionDto) {
        return null;
    }
}
