package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.DTO.PackageDTO;
import com.ivantiWebApp.server.Model.Category;
import com.ivantiWebApp.server.Model.ContentCreator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

    Category findByName(String name);

    @Query("{'name':'?0'}")
    List<String> getAllCategories();
}
