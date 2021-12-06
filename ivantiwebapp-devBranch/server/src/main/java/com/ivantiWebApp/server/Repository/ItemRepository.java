package com.ivantiWebApp.server.Repository;

import com.ivantiWebApp.server.Model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {
}
