package com.astrazeneca.azassignment;

import com.astrazeneca.azassignment.model.Student;
import com.astrazeneca.azassignment.repository.StudentRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AzAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(AzAssignmentApplication.class, args);
		System.out.println("Project Booted !!!");
	}
}
