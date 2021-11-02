package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Package;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PackageRepository extends MongoRepository<Package, String> {
}
