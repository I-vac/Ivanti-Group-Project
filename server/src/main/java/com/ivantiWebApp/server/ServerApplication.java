package com.ivantiWebApp.server;

import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Repository.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	// Example of dependency injection
	CommandLineRunner runner(ItemRepository repository) {
		return args -> {
			Item item = new Item("Title", "My description");

			repository.insert(item);
		};
	}

}
