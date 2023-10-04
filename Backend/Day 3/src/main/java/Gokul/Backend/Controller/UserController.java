package Gokul.Backend.Controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Gokul.Backend.Entity.User;
import Gokul.Backend.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService uService;
	
	
	@GetMapping("/getAll")
	public List<User> getAll() {
		
		return uService.getAll();
	}
}