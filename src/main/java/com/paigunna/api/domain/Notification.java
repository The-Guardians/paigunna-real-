package com.paigunna.api.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * @author Arm
 */
@Entity
@Table(name = "NOTIFICATION")
public class Notification implements Serializable {

    @Id
    @TableGenerator(
            name = "notification",
            table = "sequence",

            pkColumnValue = "notification",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            generator = "notification",
            strategy = GenerationType.TABLE
    )
    private String id;

    @Column(name = "STATUS")
    private String status;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRANSACTION")
    private Transaction transaction;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Notification that = (Notification) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
