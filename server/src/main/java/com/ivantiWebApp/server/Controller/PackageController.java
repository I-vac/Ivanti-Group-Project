package com.ivantiWebApp.server.Controller;

import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/package")
public class PackageController {

    @Autowired
    private PackageRepository packageRepository;

    @CrossOrigin
    @GetMapping("/s")
    public ResponseEntity<List<Package>> getPackages() {
        List<Package> packages = packageRepository.findAll();

        return ResponseEntity.ok().body(packages);
    }

    //Error needs to be fixed
/*
    @GetMapping("{id}")
    public ResponseEntity<Package> getPackage(@PathVariable(value = "id") Long id) {
        Package pack = packageRepository.findById(id);

        if(pack != null) {
            return ResponseEntity.ok().body(pack);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

 */
}
