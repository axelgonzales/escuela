package pe.escuela.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import pe.escuela.domain.Student;

@Mapper
@Component
public interface StudentRepository {

	List<Student> findAll();
	Student findId(Integer productId);
	Integer insert(Student product);
	Integer update(Student product);
	void delete(Integer productId);
}
