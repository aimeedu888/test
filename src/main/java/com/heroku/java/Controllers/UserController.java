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

	@GetMapping("/api/user/getUser")
	public @ResponseBody Iterable<User> getAllUsers(@RequestParam Integer ID) {
		return userRepository.findAll();
	}
	
	@GetMapping("/api/user/getUserByID")
	public @ResponseBody Optional<User> getUsers(@RequestParam Integer ID) {
		return userRepository.findById(ID);
	}

	@PostMapping("/api/user/addUser")
	public @ResponseBody Integer addUser(@RequestParam String username, @RequestParam String password,
			@RequestParam String email) {
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
	@GetMapping("/api/user/validateUser")
	public @ResponseBody User validateUser(@RequestParam String username, @RequestParam String password) {
		 User user = userRepository.findByUsername(username);
		    if (user != null) {
		        if (user.getPassword().equals(password)) {
		            return user;
		        } else {
		            System.out.println("Incorrect password for user: " + username);
		        }
		    } else {
		        System.out.println("User not found: " + username);
		    }
		    return null;
	}
    @DeleteMapping("/api/user/deleteUser")
    public @ResponseBody String deleteUser(@RequestParam Integer userID) {
        if (userRepository.existsById(userID)) {
            userRepository.deleteById(userID);
            return "User with ID " + userID + " deleted successfully";
        } else {
            return "User with ID " + userID + " not found, cannot delete";
        }
    }
}
