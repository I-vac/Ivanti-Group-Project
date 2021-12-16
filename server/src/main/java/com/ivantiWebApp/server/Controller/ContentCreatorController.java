package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.ContentCreator;
import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Model.User;
import com.ivantiWebApp.server.Repository.ContentCreatorRepository;
import com.ivantiWebApp.server.Repository.ItemRepository;
import com.ivantiWebApp.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/content")
public class ContentCreatorController {
    @Autowired
    private ContentCreatorRepository repository;
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @GetMapping("/creator")
    public ResponseEntity<ContentCreator> gtFull(@RequestParam String id) {
        ContentCreator items = repository.getFullUser(id);

        return ResponseEntity.ok().body(items);
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<ContentCreator> createItems(@RequestBody ContentCreator input, Authentication authentication) {
        User currentUser = userRepository.getCurrentUserByEmail(authentication.getName());
        ContentCreator newAcc = new ContentCreator(currentUser, input.getCompany(), input.getProfession());
        repository.save(newAcc);
        return ResponseEntity.ok().body(input);
    }
}
