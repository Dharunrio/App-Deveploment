package Dharun.Backend.Controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import Dharun.Backend.Constants.Api;
import Dharun.Backend.DTO.UserDTO;
import Dharun.Backend.Entity.User;
import Dharun.Backend.Service.UserService;

@CrossOrigin
@RestController
@RequestMapping(Api.USER)
public class UserController {

	@Autowired
	UserService uService;

	@GetMapping("/getAll")
	public List<UserDTO> getAll() {
		
		return uService.getAll();
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser() {
		
		return uService.getAllUser();
	}
	
	@GetMapping("/getByEmail/{email}")
	public UserDTO getByEmail(@PathVariable("email") String email) {
		
		return uService.getByEmail(email);
	}

	@GetMapping("/getById/{id}")
	public UserDTO getById(@PathVariable("id") Long id) {

		return uService.getById(id);
	}
}