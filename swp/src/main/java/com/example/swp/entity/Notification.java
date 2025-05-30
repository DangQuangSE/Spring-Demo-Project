package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long notificationId;

    private String title;

    private String content;

    private String type;

    private Boolean isRead = false;

    private LocalDateTime sendDate;

    // Người nhận thông báo
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User receiver;

    // (Tùy chọn) Người gửi thông báo (nếu muốn lưu cả sender)
    @ManyToOne
    @JoinColumn(name = "sender_id")
    private User sender;

    @ManyToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

}
