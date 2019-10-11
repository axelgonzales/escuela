package pe.escuela.service;

import pe.escuela.domain.Student;
import pe.escuela.domain.User;

public interface UserService {

	User login(User user);
	Integer insert(User user);

}
