package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Category;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.DTO.PackageDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends MongoRepository<Package, String> {
    //public List<Package> findPackageByProperties(); //String userId, String packageID, String packageTitle

    @Query("{'_id':'?0'}")
    List<PackageDTO> getPackageById(String id);

    @Query("{'category.name':'?0'}")
    List<PackageDTO> getPackageByCategory(String category);

    @Query(value = "{'title': {$regex : ?0, $options: 'i'}}")
    List<PackageDTO> findByRegex(String regexString);

    @Query(value = "{'title': {$alphabet : ?0, $options: 'i'}}")
    List<PackageDTO> findByAlphabet(String alphabetString);

}
