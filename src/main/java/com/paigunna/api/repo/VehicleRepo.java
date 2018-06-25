package com.paigunna.api.repo;

import com.paigunna.api.domain.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Arm
 */
public interface VehicleRepo extends JpaRepository<Vehicle, Long> {
}
