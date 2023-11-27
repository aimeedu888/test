package com.heroku.java.Objects;

import java.util.HashMap;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
//	private HashMap<String, Post> userPost; // Assuming Post is another class, adjust the type accordingly
	private String username;
	private String password_;
	private String email_;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int userID_;

	public User(String username, String password, String email) {
		this.username = username;
		this.password_ = password;
		this.email_ = email;
//		this.userPost = new HashMap<>();
	}

//	public HashMap<String, Post> getUserPost() {
//		return userPost;
//	}
//
//	public void setUserPost(HashMap<String, Post> userPost) {
//		this.userPost = userPost;
//	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password_;
	}

	public void setPassword(String password) {
		this.password_ = password;
	}

	public String getEmail() {
		return email_;
	}

	public void setEmail(String email) {
		this.email_ = email;
	}

	public int getUserID() {
		return userID_;
	}

	public void setUserID(int userID) {
		this.userID_ = userID;
	}
}