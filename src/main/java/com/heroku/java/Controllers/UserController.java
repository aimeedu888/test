package com.heroku.java.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.heroku.java.Objects.User;
import com.heroku.java.Repositories.*;


@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
	
	private UserRepository userRepository;
	@Autowired
	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping("/getAllUsers")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/getUserByID")
	public @ResponseBody Optional<User> getUsers(@RequestParam Integer ID) {
		return userRepository.findById(ID);
	}

	@PostMapping("/addUser")
	public @ResponseBody Integer addUser(String username, String password, String email) {
		System.out.println("In UserController addUser: ");
		System.out.println(username + password + email);
		for (User t : userRepository.findAll()) {
			if (t.getUsername().equals(username)) {
				System.out.println("Duplicate username, cannot add user");
				return -1;
			}
			if (t.getEmail().equals(email)) {
				System.out.println("Duplicate email, cannot add user");
				return -1;
			}
		}
		User u = new User(username, password, email);
		userRepository.save(u);
		return u.getUserID();
	}
	@PostMapping("/validateUser")
	public @ResponseBody String validateUser(String username, String password) {
		User user = userRepository.findByUsername(username);
		    if (user != null) {
		        if (user.getPassword().equals(password)) {
		        	System.out.println("find user: " + username);
		            return "1";
		        } else {
		            System.out.println("Incorrect password for user: " + username);
		            return "-1";
		        }
		    } else {
		        System.out.println("User not found: " + username);
		        return "0";
		    }
	}
    @DeleteMapping("/deleteUser")
    public @ResponseBody String deleteUser(@RequestParam Integer userID) {
        if (userRepository.existsById(userID)) {
            userRepository.deleteById(userID);
            return "User with ID " + userID + " deleted successfully";
        } else {
            return "User with ID " + userID + " not found, cannot delete";
        }
    }
}
