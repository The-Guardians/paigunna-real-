package com.paigunna.api.resource.dto;

import com.paigunna.api.domain.ServiceStatus;

/**
 * @author Arm
 */
public class UserSearchDto {

    private ServiceStatus serviceStatus;

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(ServiceStatus serviceStatus) {
        this.serviceStatus = serviceStatus;
    }
}
