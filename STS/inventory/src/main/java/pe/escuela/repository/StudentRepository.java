package pe.escuela.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import pe.escuela.domain.Education;
import pe.escuela.domain.Employee;
import pe.escuela.domain.Family;
import pe.escuela.domain.Student;
import pe.escuela.domain.Travel;

@Mapper
@Component
public interface StudentRepository {

	List<Student> findAll();
	Student findId(Integer studentId);
	Integer insert(Student student);
	void insertFamily(Family family);
	void insertTravel(Travel travel);
	void insertEmployee(Employee employee);
	void insertEducation(Education education);
	
	Integer update(Student student);
	void delete(Integer studentId);
}
