package pe.escuela.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import pe.escuela.domain.User;

@Mapper
@Component
public interface UserRepository {

	Integer insert(User user);
	User login(User user);
}
