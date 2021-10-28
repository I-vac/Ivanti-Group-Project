package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageController {
    @Autowired
    private PackageRepository repo;

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<Package>> getPackages() {
        List<Package> items = repo.findAll();

        return ResponseEntity.ok().body(items);
    }

    @CrossOrigin
    @GetMapping("/search")
    // http://127.0.0.1:8080/api/packages/search?id=6178032ae412fd768e43faa4
    public ResponseEntity<List<Package>> findPackageById(@RequestParam String id) {
        List<Package> packages = repo.getPackageById(id);

        return ResponseEntity.ok().body(packages);
    }
}
