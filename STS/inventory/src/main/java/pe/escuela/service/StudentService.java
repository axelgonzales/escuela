package pe.escuela.service;

import java.util.List;

import pe.escuela.domain.Student;

public interface StudentService {

	List<Student> findAll();
	Student findId(Integer productId);
	Integer insert(Student product);
	Integer update(Student product);
	void delete(Integer productId);
}
