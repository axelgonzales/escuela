package pe.escuela.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.escuela.domain.Student;
import pe.escuela.service.StudentService;

@RestController
@RequestMapping("student")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentController {
	
	private  final StudentService studentService;

	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@PostMapping
	public ResponseEntity<?> insert(
			@RequestBody Student student
			) {
		
		Integer id = studentService.insert(student);
		if (id<1) {
			return new ResponseEntity<>("Ocurrio un error al hacer insert en la bd",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(student,HttpStatus.CREATED);
		
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
	
	@DeleteMapping("/{studentId}")
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
