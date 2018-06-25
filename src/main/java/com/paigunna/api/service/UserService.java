package com.paigunna.api.service;

import com.paigunna.api.domain.User;
import com.paigunna.api.resource.dto.UserDto;

import java.util.List;

/**
 * @author Arm
 */
public interface UserService {

    User save(User user);

    List<User> searchActiveUser(UserDto userDto);

    User updateUserPos(UserDto userDto);

    User getUser(String id);
}
