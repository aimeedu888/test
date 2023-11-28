package com.heroku.java;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Map;

@SpringBootApplication
@Controller
public class GettingStartedApplication {
    private final DataSource dataSource;

    @Autowired
    public GettingStartedApplication(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/")
    public String loginhome() {
        return "login-registeration/login";
    }
    @GetMapping("/homepage.html")
    public String home() {
        return "homepage";
    }
    
    @GetMapping("/login-registeration/login.html")
    public String login() {
        return "login-registeration/login";
    }
    @GetMapping("/login-registeration/css/login.css")
    public String login_css() {
        return "css/login";
    }
    @GetMapping("/login-registeration/login.js")
    public String login_js() {
        return "login-registeration/login.js";
    }
    
    @GetMapping("/login-registeration/register.html")
    public String register() {
        return "login-registeration/register";
    }
    @GetMapping("/closet.html")
    public String closet() {
        return "closet";
    }
    
    

    @GetMapping("/database")
    String database(Map<String, Object> model) {
        try (Connection connection = dataSource.getConnection()) {
            final var statement = connection.createStatement();
            statement.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
            statement.executeUpdate("INSERT INTO ticks VALUES (now())");

            final var resultSet = statement.executeQuery("SELECT tick FROM ticks");
            final var output = new ArrayList<>();
            while (resultSet.next()) {
                output.add("Read from DB: " + resultSet.getTimestamp("tick"));
            }

            model.put("records", output);
            return "database";

        } catch (Throwable t) {
            model.put("message", t.getMessage());
            return "error";
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(GettingStartedApplication.class, args);
    }
}
