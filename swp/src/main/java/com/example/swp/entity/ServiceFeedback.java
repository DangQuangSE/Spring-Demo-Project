package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long svFeedbackId;

    Integer rating;

    String description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    //id cuộc hẹn của feedback
    @OneToOne
    @JoinColumn(name = "appointment_id")
    Appointment appointment;

    //feedback cho tư vấn viên của dịch vụ đó
    @OneToOne(mappedBy = "serviceFeedback")
    ConsultantFeedback consultantFeedback;


}
