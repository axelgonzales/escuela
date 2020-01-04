package pe.escuela.controller;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;
import pe.escuela.domain.Student;
import pe.escuela.service.StudentService;

@RestController
@RequestMapping("student")
public class StudentController {
	
	private  final StudentService studentService;

	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@PostMapping
	public ResponseEntity<?> insert(
			
			@ Validated	@RequestBody Student student
			) {
		
		Integer id = studentService.insert(student);
		if (id<1) {
			return new ResponseEntity<>("Ocurrio un error al hacer insert en la bd",HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<>(student,HttpStatus.CREATED);
		
	}
	
	@GetMapping("{id}/report")
	public ResponseEntity<?> generateReport(
			@PathVariable int id, HttpServletResponse response
			) {
		
		response.setContentType("application/x-download");
		  response.setHeader("Content-Disposition", String.format("attachment; filename=\"users.pdf\""));
		JasperPrint jasperPrint = null;
		
		try {
			jasperPrint =  studentService.generateReport(id);
		} catch (FileNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		if (id<1) {
			return new ResponseEntity<>("Ocurrio un error al hacer insert en la bd",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
			try {
				 OutputStream out = response.getOutputStream();
				JasperExportManager.exportReportToPdfStream(jasperPrint, out);
			} catch (JRException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return null;
			
			 
		
	}
	
	@GetMapping
	public ResponseEntity<?> findAll() {
		
		List<Student> students = studentService.findAll();
		
		return new ResponseEntity<>(students,HttpStatus.OK);
		
	}
	
//	@PutMapping("/{studentId}")
//	public ResponseEntity<?>update(
//			@PathVariable  int studentId,
//			@RequestBody Student student
//			) {
//		
//		student.setId(studentId);
//		
//		studentService.update(student);
//
//		
//		return new ResponseEntity<>(student,HttpStatus.ACCEPTED);
//		
//	}
	
	@DeleteMapping("{studentId}")
	public ResponseEntity<?>delete(
	       @PathVariable int studentId
	       ){
		
		studentService.delete(studentId);	
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("{studentId}")
	public ResponseEntity<?>findId(
			@PathVariable int studentId
			){
		Student student=studentService.findId(studentId);
		if (student == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(student,HttpStatus.OK);
	}
	
	

}
