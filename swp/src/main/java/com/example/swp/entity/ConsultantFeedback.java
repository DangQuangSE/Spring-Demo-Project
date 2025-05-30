package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConsultantFeedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer rating;
    private String comment;
//    private LocalDateTime createdAt = LocalDateTime.now();

    // Người gửi feedback
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    //người nhận
    @ManyToOne
    @JoinColumn(name = "consultant_id")
    User consultant;

    @OneToOne
    @JoinColumn(name = "service_feedback_id", unique = true)
    ServiceFeedback serviceFeedback;
}
