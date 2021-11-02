package com.ivantiWebApp.server.Repository;
import com.ivantiWebApp.server.DTO.PackageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PackageImplementation {
    @Autowired
    private PackageRepository repository;
    private MongoTemplate mongoTemplate;

    public List<PackageDTO> findByUser() {
        Query query = new Query()
                .addCriteria(Criteria.where("user.first_name").is("Kendrik"));
        List<PackageDTO> result = mongoTemplate.find(query, PackageDTO.class);
        return result;
    }
}
