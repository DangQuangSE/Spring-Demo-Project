package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long userId;

    String userName;
    String password;
    String email;
    String phone;
    String gender;

    //Role người dùng
    @ManyToOne
    @JoinColumn(name = "role_id")
    UserRole role;

    //các blog
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    List<Blog> blogs;

    //chứng chỉ
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Certificate> certificates;

    //lịch trình
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Schedule> schedules;

    //user gửi cuộc trò chuyện
    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
    List<ChatSession> sentSessions;

    //user nhận cuộc trò chuyện
    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    List<ChatSession> receivedSessions;

    //cuộc hẹn của bệnh nhân
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    List<Appointment> appointmentsAsCustomer;

    //cuộc hẹn của bác sĩ
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    List<Appointment> appointmentsAsDoctor;

    //payment
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<Payment> payments;

    //người nhận thông báo
    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    private List<Notification> receivedNotifications;

    //người gửi thông báo
    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
    private List<Notification> sentNotifications;

    //serviceFeedback
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<ServiceFeedback> svFeedbacks;

    //gửi người feedback cho tư vấn viên
    @OneToMany(mappedBy = "user")
    List<ConsultantFeedback> consultantFeedbacksGiven;

    //tư vấn viện nhận feedback
    @OneToMany(mappedBy = "consultant")
    List<ConsultantFeedback> consultantsFeedbacksReceived;








}
