package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.ContentCreator;
import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Repository.ContentCreatorRepository;
import com.ivantiWebApp.server.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api//content")
public class ContentCreatorController {

        @Autowired
        private ContentCreatorRepository repository;
        @CrossOrigin
        @GetMapping("/creator")
        public ResponseEntity<ContentCreator> gtFull(@RequestParam String id) {
            ContentCreator items = repository.getFullUser(id);

            return ResponseEntity.ok().body(items);
        }
}
