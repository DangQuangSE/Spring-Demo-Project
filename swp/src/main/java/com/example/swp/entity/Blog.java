package com.example.swp.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long blogId;

    String title;

    @Column(columnDefinition = "TEXT")
    String content;

    LocalDate date;

    String status;

    @ManyToOne
    @JoinColumn(name = "author_id")
    User author;


}
