package com.heroku.java.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.heroku.java.Objects.User;
import com.heroku.java.Repositories.*;
@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/addUser")
    public Integer addUser(@RequestParam String username, @RequestParam String password, @RequestParam String email) {
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

    @GetMapping("/validateUser")
    public User validateUser(@RequestParam String username, @RequestParam String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            System.out.println("Authentication failed for user: " + username);
            return null;
        }
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(@RequestParam Integer userID) {
        if (userRepository.existsById(userID)) {
            userRepository.deleteById(userID);
            return "User with ID " + userID + " deleted successfully";
        } else {
            return "User with ID " + userID + " not found, cannot delete";
        }
    }
}
