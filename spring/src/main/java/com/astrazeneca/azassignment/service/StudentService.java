package com.astrazeneca.azassignment.service;

import com.astrazeneca.azassignment.model.Student;
import com.astrazeneca.azassignment.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepo;

    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    public Student addStudent(Student s) {
        return studentRepo.save(s);
    }

    public Optional<Student> getStudentById(int id) {
        return studentRepo.findById(id);
    }

    public String deleteStudentById(int id) {
        String result;
        try {
            studentRepo.deleteById(id);
            result = "Student deleted";
        } catch (Exception e) {
            result = "Given id is not found";
        }
        return result;
    }

}
