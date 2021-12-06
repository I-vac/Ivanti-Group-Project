package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
    Role findByRole(String role);
}
