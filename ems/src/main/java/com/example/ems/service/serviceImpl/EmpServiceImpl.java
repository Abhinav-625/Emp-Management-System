package com.example.ems.service.serviceImpl;

import com.example.ems.dto.EmployeeDto;
import com.example.ems.entity.Employee;
import com.example.ems.exception.ResourceNotFound;
import com.example.ems.mapper.EmpMapper;
import com.example.ems.repository.EmpRepository;
import com.example.ems.service.EmpService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.ems.mapper.EmpMapper.toEmployee;

import static com.example.ems.mapper.EmpMapper.toEmployeeDto;

@Service
@AllArgsConstructor
public class EmpServiceImpl implements EmpService {

    private EmpRepository empRepository;

    @Override
    public EmployeeDto getEmployee(Long id){
        Employee employee = empRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFound("Cannot find the employee with id: " + id)
                );
        return toEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getEmployees(){
        List<Employee> employees = empRepository.findAll();
        return employees.stream().map(EmpMapper::toEmployeeDto).toList();
    }

    @Override
    public EmployeeDto addEmployee(EmployeeDto employeeDto){
        Employee employee = toEmployee(employeeDto);
        empRepository.save(employee);
        return toEmployeeDto(employee);
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        Employee employee = empRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFound("Cannot find the employee with id: " + id)
                );
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        return toEmployeeDto(empRepository.save(employee));
    }

    @Override
    public void deleteEmployee(Long id){
        empRepository.delete(
                empRepository.findById(id)
                        .orElseThrow(
                                () -> new ResourceNotFound("Cannot find the employee with id: " + id)
                        )
        );
    }
}
