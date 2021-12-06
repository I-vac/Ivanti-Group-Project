package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemRepository repository;
    @CrossOrigin
    @GetMapping("/items")
    public ResponseEntity<List<Item>> getItems() {
        List<Item> items = repository.findAll();

        return ResponseEntity.ok().body(items);
    }

//    @CrossOrigin
//    @PostMapping("/add")
//    public ResponseEntity<Item> addItem(@RequestBody Item item){
//        Item item1 = repository.save(item);
//        return ResponseEntity.ok().body(item);
//    }
}
