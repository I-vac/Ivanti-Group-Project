package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Package;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends MongoRepository<Package, String> {
    //public List<Package> findPackageByProperties(); //String userId, String packageID, String packageTitle

    @Query("{id:'?0'}")
    List<Package> getPackageById(String id);

}
