package com.paigunna.api.resource;

import com.paigunna.api.domain.VehicleType;
import com.paigunna.api.repo.VehicleTypeRepo;
import com.paigunna.api.service.VehicleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/vehicle_type")
public class VehicleTypeResource {

    @Autowired
    private VehicleTypeRepo vehicleTypeRepo;

    @Autowired
    private VehicleTypeService vehicleTypeService;

    @GetMapping
    public List<VehicleType> findAll(){
        return vehicleTypeRepo.findAll();
    }
}
