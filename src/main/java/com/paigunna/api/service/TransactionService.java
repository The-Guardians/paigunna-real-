package com.paigunna.api.service;

import com.paigunna.api.domain.Transaction;
import com.paigunna.api.resource.dto.TransactionDto;

import java.util.List;

/**
 * @author Arm
 */
public interface TransactionService {

    Transaction save(Transaction transaction);

    List<Transaction> search(TransactionDto transactionDto);
}
