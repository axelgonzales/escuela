package pe.escuela.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.escuela.domain.User;
import pe.escuela.service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	private  final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping
	public ResponseEntity<?> insert(
			@RequestBody User user
			) {
		
		Integer id = userService.insert(user);
		if (id<1) {
			return new ResponseEntity<>("Ocurrio un error al hacer insert en la bd",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(user,HttpStatus.CREATED);
		
	}
	@PostMapping("login")
	public ResponseEntity<?> login(
			@RequestBody User user
			) {
		
		User userLogin = userService.login(user);
		if (userLogin == null) {
			return new ResponseEntity<>("Usuario no existe",HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	

	

}
