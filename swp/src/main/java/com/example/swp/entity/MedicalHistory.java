package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MedicalHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long recordId;

    String diagnosis;

    LocalDate visitDate;

    @Column(columnDefinition = "TEXT")
    String note;

    @OneToOne
    @JoinColumn(name = "appointment_id")
    Appointment appointment;

}
