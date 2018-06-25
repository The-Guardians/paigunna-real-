package com.paigunna.api.resource;

import com.google.common.base.Strings;
import com.paigunna.api.domain.Transaction;
import com.paigunna.api.repo.TransactionRepo;
import com.paigunna.api.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/transaction")
public class TransactionResource {

    @Autowired
    private TransactionRepo transactionRepo;

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> findAll() {
        return transactionRepo.findAll();
    }

    @GetMapping("/user/{id}")
    public List<Transaction> findByUser(@PathVariable("id")String id){
        return null;
    }
}
