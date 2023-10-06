package Dharun.Backend.Controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Dharun.Backend.Constants.Api;
import Dharun.Backend.DTO.UserDTO;
import Dharun.Backend.Entity.UserEntity;
import Dharun.Backend.Repository.UserRepository;
import Dharun.Backend.Service.UserService;

@RestController
@RequestMapping(Api.USER)
public class UserController {

	@Autowired
	UserService uService;
	
	@Autowired
	UserRepository uRepo;
	
	
	@GetMapping("/getAll")
	public List<UserDTO> getAll() {
		
		return uService.getAll();
	}
	
	@GetMapping("/getById/{id}")
	public UserDTO getById(@PathVariable("id") Long id) {
		
		return uService.getById(id);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		
		uRepo.deleteById(id);
	}
}