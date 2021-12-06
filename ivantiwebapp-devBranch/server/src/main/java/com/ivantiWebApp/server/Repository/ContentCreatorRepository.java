package com.ivantiWebApp.server.Repository;
import com.ivantiWebApp.server.Model.ContentCreator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentCreatorRepository extends MongoRepository<ContentCreator, String> {
}
