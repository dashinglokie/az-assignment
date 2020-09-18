package com.astrazeneca.azassignment.model;

import lombok.NonNull;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Student {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    @NonNull
    @Setter
    private String name;

    @Column(nullable = false)
    @NonNull
    @Setter
    private String address;

    @Column(nullable = false)
    @NonNull
    @Setter
    private Date dob;
}
