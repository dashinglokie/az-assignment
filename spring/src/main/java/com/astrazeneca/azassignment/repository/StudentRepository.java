package com.astrazeneca.azassignment.repository;

import com.astrazeneca.azassignment.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
