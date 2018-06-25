package com.paigunna.api.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

/**
 * @author Arm
 */
@Entity
@Table(name = "VEHICLE_TYPE")
public class VehicleType implements Serializable {

    @Id
    @TableGenerator(
            name = "vehicle_type",
            table = "sequence",
            pkColumnValue = "vehicle_type",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            generator = "vehicle_type",
            strategy = GenerationType.TABLE
    )
    private String id;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "RATE")
    private BigDecimal rate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VehicleType that = (VehicleType) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
