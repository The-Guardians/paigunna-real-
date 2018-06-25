package com.paigunna.api.service;

import com.paigunna.api.domain.User;
import com.paigunna.api.repo.UserRepo;
import com.paigunna.api.resource.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Arm
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User save(User user) {
        return userRepo.save(user);
    }

    @Override
    public List<User> searchActiveUser(UserDto userDto) {

        return null;
    }

    @Override
    public User updateUserPos(UserDto userDto) {
        return null;
    }

    @Override
    public User getUser(String id) {
        return userRepo.findById(id);
    }
}
