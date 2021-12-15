package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.DTO.AuthDTO;
import com.ivantiWebApp.server.Model.User;
import com.ivantiWebApp.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserRepository users;

    @RequestMapping("/getuser")
    public ResponseEntity<AuthDTO> getUser(Authentication authentication) {
        System.out.println(authentication.getName());
        AuthDTO out = users.getCurrentuser(authentication.getName());
        return ResponseEntity.ok().body(out);
    }

    @GetMapping("/getuser")
    public ResponseEntity<User> getFull(@RequestParam String id) {
        User out = users.getFullUser(id);
        return ResponseEntity.ok().body(out);
    }
}
