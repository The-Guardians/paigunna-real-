package com.paigunna.api.service;

import com.paigunna.api.domain.Vehicle;
import com.paigunna.api.repo.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Arm
 */
@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo vehicleRepo;

    @Override
    public Vehicle save(Vehicle vehicle) {
        return vehicleRepo.save(vehicle);
    }

    @Override
    public Vehicle getVehicle(String id) {
        return null;
    }

    @Override
    public List<Vehicle> getAllVehicle() {
        return null;
    }
}
