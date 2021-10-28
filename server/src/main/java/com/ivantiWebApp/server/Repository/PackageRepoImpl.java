package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public abstract class PackageRepoImpl implements PackageRepository{
    @Autowired
    MongoTemplate mongoTemplate;

}
