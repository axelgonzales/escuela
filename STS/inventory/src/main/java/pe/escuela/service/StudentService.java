package pe.escuela.service;

import java.io.FileNotFoundException;
import java.util.List;

import net.sf.jasperreports.engine.JasperPrint;
import pe.escuela.domain.Student;

public interface StudentService {

	List<Student> findAll();
	Student findId(Integer studentId);
	Integer insert(Student student);
	Integer update(Student student);
	void delete(Integer studentId);
	JasperPrint  generateReport(Integer studentId) throws FileNotFoundException;
}
