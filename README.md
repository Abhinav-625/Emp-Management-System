# Full Stack Employee Management System Using React

A Spring Boot employee management system application built with React and MySQL.  
Supports employee operations like create, update, view, and delete.

## Tech Stack
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- React
- Bootstrap
- MySQL
- Maven

## Features
- Add Employee
- Update Employee details
- Delete Employee
- View all employees
- Custom exception handling
- Layered MVC architecture

## Project Structure
```

ems/src/main/java/com/example/ems
├─ controller
├─ service
├─ serviceImpl
├─ repository
├─ entity
├─ dto
├─ mapper
└─ exception

ems/src/main/resources
└─ application.properties

ems-frontend
└─ src

````

## Run Backend

### 1. Create database
```sql
create database ems;
````

### 2. Configure DB

```
src/main/resources/application.properties
```

```
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### 3. Run app

```
cd ems
mvnw.cmd spring-boot:run
```

App runs at:

```
http://localhost:8080
```

### API Base URL

http://localhost:8080/api/employees

## Run Frontend

### 1. Run app

```
cd ems-frontend
npm install
npm start
```

App runs at:

```
http://localhost:3000
```

## Architecture

Controller → Service → Repository → Database
DTO ↔ Mapper ↔ Entity

## Author

Abhinav Tomar
