package com.example.ems.service;

import com.example.ems.dto.EmployeeDto;

import java.util.List;

public interface EmpService {

    public EmployeeDto getEmployee(Long id);
    public List<EmployeeDto> getEmployees();
    public EmployeeDto addEmployee(EmployeeDto employeeDto);
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);
    public void deleteEmployee(Long id);
}
