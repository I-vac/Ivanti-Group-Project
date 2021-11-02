package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.DTO.PackageDTO;
import com.ivantiWebApp.server.Repository.PackageImplementation;
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
}