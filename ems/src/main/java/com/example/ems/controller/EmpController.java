package com.example.ems.controller;

import com.example.ems.dto.EmployeeDto;
import com.example.ems.service.serviceImpl.EmpServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmpController {

    EmpServiceImpl empService;

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployee(@PathVariable long id) {
        return ResponseEntity.ok(empService.getEmployee(id));
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getEmployees() {
        return ResponseEntity.ok(empService.getEmployees());
    }

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        return new ResponseEntity<>(empService.addEmployee(employeeDto), HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDto employeeDto) {
        return ResponseEntity.ok(empService.updateEmployee(id, employeeDto));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteEmployee(@RequestParam long id){
        empService.deleteEmployee(id);
        return ResponseEntity.ok("Deleted Successfully");
    }
}
