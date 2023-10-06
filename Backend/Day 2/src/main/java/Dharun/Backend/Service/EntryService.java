package Dharun.Backend.Service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Dharun.Backend.DTO.AuthenticationRequest;
import Dharun.Backend.DTO.AuthenticationResponse;
import Dharun.Backend.DTO.RegisterRequest;
import Dharun.Backend.Entity.UserEntity;
import Dharun.Backend.Entity.Enumerate.Role;
import Dharun.Backend.Repository.UserRepository;
import Dharun.Backend.Util.JwtService;


@Service
public class EntryService {

	@Autowired
	UserRepository uRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public AuthenticationResponse validateUser(AuthenticationRequest request) {
		
		authenticationManager.authenticate(
				
			new UsernamePasswordAuthenticationToken(
					request.getEmail(), request.getPassword()
				)
		);
		
		var user = uRepo.findByEmail(request.getEmail()).orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
		
	}
	
	
	public AuthenticationResponse CreateNewUser(RegisterRequest request) {
		
		
		var user = UserEntity.builder()
				.name(request.getName())
				.phoneno(request.getPhoneno())
				.dob(request.getDob())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
			
			
			uRepo.save(user);
			
			var jwtToken = jwtService.generateToken(user);
			
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
	}
}
