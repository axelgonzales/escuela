package pe.escuela.service.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import pe.escuela.domain.Education;
import pe.escuela.domain.Employee;
import pe.escuela.domain.Family;
import pe.escuela.domain.Student;
import pe.escuela.domain.Travel;
import pe.escuela.repository.Conexion;
import pe.escuela.repository.StudentRepository;
import pe.escuela.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	private ResourceLoader resourceLoader;
	 
	public StudentServiceImpl(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	@Override
	public List<Student> findAll() {
		return this.studentRepository.findAll();
	}

	@Override
	public Student findId(Integer studentId) {

		return this.studentRepository.findId(studentId);
	}

	@Override
	public Integer insert(Student student) {
		int studentId = this.studentRepository.insert(student);
		for (Family family : student.getFamilies()) {
			family.setStudentId(studentId);
			this.studentRepository.insertFamily(family);
		}
		for (Travel travel : student.getTravels()) {
			travel.setStudentId(studentId);
			this.studentRepository.insertTravel(travel);
		}
		for (Employee employee : student.getEmployees()) {
			employee.setStudentId(studentId);
			this.studentRepository.insertEmployee(employee);
		}
		for (Education education : student.getEducations()) {
			education.setStudentId(studentId);
			this.studentRepository.insertEducation(education);
		}
		
		return studentId;
	}

	@Override
	public Integer update(Student student) {

		return this.studentRepository.update(student);
	}

	@Override
	public void delete(Integer studentId) {

		this.studentRepository.delete(studentId);

	}

	@Override
	public JasperPrint  generateReport(Integer studentId) throws FileNotFoundException {
		List<Student> students = new ArrayList<Student>();
		try {
			String pathLoader = "";
			try {
				pathLoader = resourceLoader.getResource("classpath:jasper/student.jrxml").getURI().getPath();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			JasperReport jasperReport = JasperCompileManager.compileReport(pathLoader);
			System.out.println("pathLoader " +pathLoader );
			Map<String, Object> map = new HashedMap();
			map.put("p_student_id", studentId);
			map.put("SUBREPORT_DIR", pathLoader.replace("student.jrxml", ""));
			JRBeanCollectionDataSource datasource = new JRBeanCollectionDataSource(students);
			
			JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, map, Conexion.conectar());
			
			return jasperPrint;
		} catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
