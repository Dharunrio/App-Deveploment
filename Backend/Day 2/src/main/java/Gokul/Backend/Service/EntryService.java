package Gokul.Backend.Service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Gokul.Backend.Entity.User;
import Gokul.Backend.Repository.UserRepository;


@Service
public class EntryService {

	@Autowired
	UserRepository uRepo;
	
	
	public Boolean validateUser(String email, String password) {
		
		List<User> userlist = uRepo.checkPassword(email);
		String ref = "";
		
		if(userlist.isEmpty()) {
			
			return false;
		}
		else {
						
			ref = userlist.get(0).getPassword();
		}
		
		
		if(password.equals(ref)) {
			
			return true;
		}
		else if( !password.equals(ref) ) {
			
			 return false;
		}
		else {
			
			return false;
		}
		
	}
	
	
	public Integer CreateNewUser(User new_user) {
		
		List<Integer> emailCountList = uRepo.isEmailExist(new_user.getEmail());
		List<Integer> phnoCountList = uRepo.isPhnoExist(new_user.getPhoneno());
		
		if(emailCountList.get(0) !=  0) {
			
			return 1;
		}
		else if(phnoCountList.get(0) != 0) {
			
			return 2;
		}
		else {
			
			uRepo.save(new_user);
			return 0;
		}
	}
}
