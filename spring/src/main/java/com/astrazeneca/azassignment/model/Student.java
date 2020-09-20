package com.astrazeneca.azassignment.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@RequiredArgsConstructor
public class Student {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "name", nullable = false)
    @NonNull
    @Setter
    private String name;

    @Column(name = "address", nullable = false)
    @NonNull
    @Setter
    private String address;

    @Column(name = "dob", nullable = false)
    @NonNull
    @Setter
    private Date dob;
}
