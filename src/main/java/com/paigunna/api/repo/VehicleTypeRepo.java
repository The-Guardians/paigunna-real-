package com.paigunna.api.repo;

import com.paigunna.api.domain.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Arm
 */
public interface VehicleTypeRepo extends JpaRepository<VehicleType, Long> {
}
