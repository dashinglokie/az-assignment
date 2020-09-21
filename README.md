# az-assignment
<h4><u>Student Register</u></h4>

#### How to run :
Download / Clone the repo, and just run <b>`gradlew build bootRun`</b> to build and boot the application.
After successful build visit <b><i>`http://localhost:8080`</i></b> 

#### project-timeline :
1. Created a spring-boot project using https://start.spring.io/ using the following dependencies;
![alt text](https://github.com/dashinglokie/az-assignment/blob/master/spring-startup.png?raw=true)
2. Restructured project for 'spring' and 'ui' modules.
3. Added Angular boiler-plate code and pointed in to the same port.
4. Project modules created in spring and connected with H2 db
5. Added REST endpoint and services for the basic CRUD operations.
6. Replaced the UI boiler-plate code with Reactive-Form and Mat-Table.
7. Added basic form validation using Validators.
8. Enable/Disable of buttons based on condition.
9. UI and functional tweaks, converted date value.
10. Loaded the H2 DB with intial-data.
11. Fixed an issue with ISO-date-convertion.
12. Added minimal UI styles and button validations.