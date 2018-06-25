package com.paigunna.api.resource;

import com.google.common.base.Strings;
import com.paigunna.api.domain.User;
import com.paigunna.api.repo.UserRepo;
import com.paigunna.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/user")
public class UserResource {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll(){
        return userRepo.findAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable("id") String id){
        return userRepo.findOne(new Long(id));
    }

    @GetMapping("/service")
    public List<User> getServiceUser(){
        return null;
    }

    @PostMapping
    public User save(@RequestBody User user){
        return userService.save(user);
    }

    @PostMapping("/update/pos/{id}")
    public User updatePos(@RequestBody User user){
        return null;
    }
}
