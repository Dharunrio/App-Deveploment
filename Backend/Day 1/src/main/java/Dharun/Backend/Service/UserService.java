package Dharun.Backend.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Dharun.Backend.DTO.UserDTO;
import Dharun.Backend.Entity.UserEntity;
import Dharun.Backend.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	
	public List<UserDTO> getAll() {
		
		List<UserEntity> userEntity = uRepo.findAll();
		List<UserDTO> userDTO = new ArrayList<>();
		
		for(UserEntity u : userEntity) {
			
			userDTO.add( UserDTO
			.builder()
			.name(u.getName())
			.email(u.getEmail())
			.dob(u.getDob())
			.phoneno(u.getPhoneno())
			.build());
		}
		
		return userDTO;
	}

	public UserDTO getById(Long id) {
		
		UserEntity userEntity = uRepo.findById(id).get();
		
		return UserDTO
				.builder()
				.name(userEntity.getName())
				.email(userEntity.getEmail())
				.dob(userEntity.getDob())
				.phoneno(userEntity.getPhoneno())
				.build();
	}
	
}
