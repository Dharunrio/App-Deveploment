package Gokul.Backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Gokul.Backend.Entity.User;
import jakarta.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
	@Query("select u from User u where u.email = ?1")
	public List<User> checkPassword(@Param("email") String email);
	
	
	@Transactional
	@Query("select count(u) from User u where u.email = ?1") 
	public List<Integer> isEmailExist(@Param("email") String email);
	
	@Transactional
	@Query("select count(u) from User u where u.phoneno = ?1") 
	public List<Integer> isPhnoExist(@Param("phno") Long phoneno);
}
