package pe.escuela.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import pe.escuela.domain.Student;
import pe.escuela.repository.StudentRepository;
import pe.escuela.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentRepository productRepository;

	public StudentServiceImpl(StudentRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public List<Student> findAll() {
		return this.productRepository.findAll();
	}

	@Override
	public Student findId(Integer productId) {
		// TODO Auto-generated method stub
		return this.productRepository.findId(productId);
	}

	@Override
	public Integer insert(Student product) {
		return  this.productRepository.insert(product);
	}

	@Override
	public Integer update(Student product) {
		// TODO Auto-generated method stub
		return this.productRepository.update(product);
	}

	@Override
	public void delete(Integer productId) {
		// TODO Auto-generated method stub
		this.productRepository.delete(productId);
		
	}

}
