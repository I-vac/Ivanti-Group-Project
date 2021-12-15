package com.ivantiWebApp.server.Repository;
import com.ivantiWebApp.server.Model.ContentCreator;
import com.ivantiWebApp.server.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentCreatorRepository extends MongoRepository<ContentCreator, String> {
    @Query("{'user.id':'?0'}")
    ContentCreator getFullUser(String id);
}
