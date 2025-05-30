package com.example.swp.entity;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Testing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long testingId;

    String topicTest;

    Double cost;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;
}
