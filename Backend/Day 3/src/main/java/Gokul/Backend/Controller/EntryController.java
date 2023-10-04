package Gokul.Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import Gokul.Backend.Entity.User;
import Gokul.Backend.Service.EntryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;


@RestController
@RequestMapping("/entry")
public class EntryController {

	@Autowired
	EntryService eService;
	
	
	@Operation(summary = "sign up a new user and add details in user table")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "new user added successfully"),
			@ApiResponse(responseCode = "400", description = "User already exist")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post",  consumes = "application/json")
	public ResponseEntity<Integer> CreateNewUser(@RequestBody User new_user) {
		
		return ResponseEntity.ok(eService.CreateNewUser(new_user));
	}

	
	
	
	@Operation(summary = "Get user details for sign in validation")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Successfully loged in"),
			@ApiResponse(responseCode = "400", description = "Could not log in")
	})
	@ResponseStatus(HttpStatus.OK)
	@GetMapping(value = "/auth_user")
	public ResponseEntity<Boolean> checkUser(@RequestParam(value="email", required = true) String email, @RequestParam(value="password", required = true) String password) {

		return ResponseEntity.ok(eService.validateUser(email, password));
	}
	
	
	
}
