package com.paigunna.api.service;

import com.paigunna.api.resource.dto.VehicleDto;

import java.util.List;

/**
 * @author Arm
 */
public interface VehicleNearbyService {

    List<VehicleDto> findByUserIdAndDistanceAndVehicleType(String userId, Long distance, String vehicleType);
}
