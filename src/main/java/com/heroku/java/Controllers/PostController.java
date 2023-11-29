package com.heroku.java.Controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.heroku.java.Objects.*;
import com.heroku.java.Repositories.*;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController {
	
	private PostRepository postRepository;
	@Autowired
	public PostController(PostRepository postRepository) {
		this.postRepository = postRepository;
	}
	
	@PostMapping("/PostTest")
	public @ResponseBody String test(int test1, String test2) {
		String temp = "test receive, the data is: ";
		temp += String.valueOf(test1);
		temp += " "+ test2;
		System.out.print(temp);
		return temp;
	}
	
	@GetMapping("/getAllPost")
	public @ResponseBody Iterable<Post> getAllPosts() {
		return postRepository.findAll();
	}
	
	@GetMapping("/getPostByUser")
	public @ResponseBody List<Post> getPostsByUser(int user_id) {
		Iterable<Post> allpost = postRepository.findAll();
		List<Post> posts = new ArrayList<Post>();
		for (Post p : allpost) {
			if (p.getUser_id()== user_id) {
				posts.add(p);
			}
		}
		return posts;
	}
	
	@GetMapping("/getPostByID")
	public @ResponseBody Optional<Post> getPostsByID(int post_id) {
		return postRepository.findById(post_id);
	}

	@PostMapping("/addPost")
	public @ResponseBody Integer addPost(String postTitle, String imageUrl_, String itemPrice_, String description_, String seller_, String sold_, String user_id) {
		
		for (Post t : postRepository.findAll()) {
			if (t.getPostTitle().equals(postTitle)) {
				System.out.println("Duplicate postTitle, cannot add Post");
				return -1;
			}
		}
		
		// create the Post object
		Double itemPrice = Double.parseDouble(itemPrice_);
		boolean sold = true;
		if (sold_.equals("0")) {
			sold = false;
		}
		int u_id = Integer.parseInt(user_id);
		Post p = new Post(postTitle, imageUrl_, itemPrice, description_,sold, u_id);
		
		postRepository.save(p);
		return p.getPostID();
	}
	
    @DeleteMapping("/deletePost")
    public @ResponseBody String deletePost(Integer postID) {
        if (postRepository.existsById(postID)) {
            postRepository.deleteById(postID);
            return "Post with ID " + postID + " deleted successfully";
        } else {
            return "Post with ID " + postID + " not found, cannot delete";
        }
    }
}
