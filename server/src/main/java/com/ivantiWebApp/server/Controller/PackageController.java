package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.Category;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.DTO.PackageDTO;
import com.ivantiWebApp.server.Repository.CategoryRepository;
import com.ivantiWebApp.server.Repository.PackageImplementation;
import com.ivantiWebApp.server.Repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Queue;

@RestController
@RequestMapping("/api/packages")
public class PackageController {

    @Autowired
    private PackageRepository repo;
    @Autowired
    private MongoTemplate mongoTemplate;
    private MongoOperations mongoOperations;

    private CategoryRepository categoryRepository;
    private PackageImplementation repoImplementation;

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<Package>> getPackages() {
        List<Package> items = repo.findAll();

        return ResponseEntity.ok().body(items);
    }

    @CrossOrigin
    @GetMapping("/search")
    // http://127.0.0.1:8080/api/packages/search?id=6178032ae412fd768e43faa4
    public ResponseEntity<List<PackageDTO>> findPackageById(@RequestParam String id) {
        List<PackageDTO> packages = repo.getPackageById(id);

        return ResponseEntity.ok().body(packages);
    }

    @CrossOrigin
    @GetMapping("/regex")
    // http://127.0.0.1:8080/api/packages/regex?search=
    public ResponseEntity<List<PackageDTO>> findByRegex(@RequestParam String search) {
        List<PackageDTO> packages = repo.findByRegex(search);

        return ResponseEntity.ok().body(packages);
    }

    @CrossOrigin
    @GetMapping("/byuser")
    public ResponseEntity<List<PackageDTO>> findPackageByUser() {
        List<PackageDTO> packages = repoImplementation.findByUser();

        return ResponseEntity.ok().body(packages);
    }

    @CrossOrigin
    @GetMapping("/bycategory")
    // http://127.0.0.1:8080/api/packages/bycategory?category=
    public ResponseEntity<List<PackageDTO>> findPackageByCategory(@RequestParam String category) {
        List<PackageDTO> packages = repo.getPackageByCategory(category);

        return ResponseEntity.ok().body(packages);
    }

    @CrossOrigin
    @GetMapping("/category/all")
    // http://127.0.0.1:8080/api/packages/category/all
    public ResponseEntity<List<String>> getAllCategories() {
        List<String> names = mongoTemplate.query(Category.class).distinct("name").as(String.class).all();

        return ResponseEntity.ok().body(names);

        //List<Category> categories = mongoOperations.findAll(Category.class);

        //return ResponseEntity.ok().body(categories);
    }

    @CrossOrigin
    @PostMapping("/create")
    public ResponseEntity<Package> createPackage(@RequestBody Package packRB ) {
        Package pack = packRB;
        repo.save(pack);
        return ResponseEntity.ok().body(pack);
    }

    @CrossOrigin
    @GetMapping("/byid")
    public ResponseEntity<List<PackageDTO>> findPackageByID(@RequestParam String id) {
        List<PackageDTO> packageid = repo.getPackageById(id);

        return ResponseEntity.ok().body(packageid);
    }

}
