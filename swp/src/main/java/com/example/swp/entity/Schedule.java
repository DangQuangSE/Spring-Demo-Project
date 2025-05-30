package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long scheduleId;

    LocalDateTime startTime;

    LocalDateTime endTime;

    LocalDateTime workingDate;

    Boolean isAvailable = true;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

}
