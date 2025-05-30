package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long appoiId;

    String type;
    LocalDateTime appointmentTime;
    String status;
    String totalPrice;
    String result;

    //id khách hàng
    @ManyToOne
    @JoinColumn(name = "customer_id")
    User customer;

    //id bác sĩ
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    User doctor;

    //hóa đơn
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id",referencedColumnName = "paymentId")
    Payment payment;

    //hồ sơ bệnh án
    @OneToOne(mappedBy = "appointment", cascade = CascadeType.ALL)
    MedicalHistory medicalHistory;

    @OneToMany(mappedBy = "appointment", cascade = CascadeType.ALL)
    List<Notification> notifications;

    //hồ sơ bệnh
    @ManyToOne
    @JoinColumn(name = "profile_id")
    MedicalProfile medicalProfile;

    //feedback của cuộc hẹn
    @OneToOne(mappedBy = "appointment")
    ServiceFeedback serviceFeedback;

    //testing của cuộc hẹn
    @ManyToOne
    @JoinColumn(name = "testing_id")
    Testing testing;

    //consulting của cuộc hẹn
    @ManyToOne
    @JoinColumn(name = "consulting_id")
    Consulting consulting;

}
