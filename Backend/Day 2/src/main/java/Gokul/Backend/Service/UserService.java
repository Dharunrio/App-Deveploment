package Gokul.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Gokul.Backend.Entity.User;
import Gokul.Backend.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	
	public List<User> getAll() {
		
		return uRepo.findAll();
	}
	
}
