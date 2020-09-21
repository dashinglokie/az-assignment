package com.astrazeneca.azassignment.controller;

import com.astrazeneca.azassignment.model.Student;
import com.astrazeneca.azassignment.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService ss;

    /**
     * Retrieve all the student records.
     *
     * @return list of students
     */
    @GetMapping("/students")
    public List<Student> getStudentList() {
        return ss.getAllStudents();
    }

    /**
     * Insert a student record.
     *
     * @return the student
     */
    @PostMapping("/add-student")
    public Student addStudent(@RequestBody Student s) {
        return ss.addStudent(s);
    }

    /**
     * Update the student record by id.
     *
     * @return the student
     */
    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student s) {
        return ss.addStudent(s);
    }

    /**
     * Deletes a student by id.
     *
     * @param id ID of student to be deleted
     * @throws IOException if there is an error deleting the image file
     * @return the result of delete
     */
    @DeleteMapping("/deleteStudentById/{id}")
    public String deleteStudentById(@PathVariable("id") int id) throws IOException {
        return ss.deleteStudentById(id);
    }

}