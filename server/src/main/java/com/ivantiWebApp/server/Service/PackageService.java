package com.ivantiWebApp.server.Service;

import com.ivantiWebApp.server.DTO.PackageDTO;
import com.ivantiWebApp.server.Model.Category;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Model.User;
import com.ivantiWebApp.server.Repository.CategoryRepository;
import com.ivantiWebApp.server.Repository.PackageRepository;
import com.ivantiWebApp.server.Repository.RoleRepository;
import com.ivantiWebApp.server.Repository.UserRepository;
import com.sun.xml.bind.v2.runtime.reflect.Lister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    public List<PackageDTO> getPackageByCategory(String category) {
        return packageRepository.getPackageByCategory(category);
    }


}
