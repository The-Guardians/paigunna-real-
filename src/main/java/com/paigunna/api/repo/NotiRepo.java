package com.paigunna.api.repo;

import com.paigunna.api.domain.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Arm
 */
public interface NotiRepo extends JpaRepository<Notification, Long> {
}
