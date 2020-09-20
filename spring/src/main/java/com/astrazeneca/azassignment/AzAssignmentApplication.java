package com.astrazeneca.azassignment;

import com.astrazeneca.azassignment.model.Student;
import com.astrazeneca.azassignment.repository.StudentRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class AzAssignmentApplication {

	private StudentRepository studentRepo;

	public static void main(String[] args) {
		SpringApplication.run(AzAssignmentApplication.class, args);
		System.out.println("Project Booted !!!");
	}

//	InitializingBean loadData() {
//		return () -> {
//			studentRepo.save(new Student(7,"Loke", "Chennai", new Date(1993,07,13)));
//			studentRepo.save(new Student(10,"Thor", "Asgard", new Date(1985,03,10)));
//			studentRepo.save(new Student(21,"Odin", "Asgard", new Date(1951,12,21)));
//		};
//	}

}
