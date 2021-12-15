package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.DTO.AuthDTO;
import com.ivantiWebApp.server.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

    @Query("{'email':'?0'}")
    AuthDTO getCurrentuser(String email);

    @Query("{'id':'?0'}")
    User getFullUser(String id);

}
