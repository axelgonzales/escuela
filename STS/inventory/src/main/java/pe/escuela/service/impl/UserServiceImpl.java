package pe.escuela.service.impl;

import org.springframework.stereotype.Service;

import pe.escuela.domain.User;
import pe.escuela.repository.UserRepository;
import pe.escuela.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}


	@Override
	public Integer insert(User user) {
		return  this.userRepository.insert(user);
	}


	@Override
	public User login(User user) {
		// TODO Auto-generated method stub
		return this.userRepository.login(user);
	}

}
