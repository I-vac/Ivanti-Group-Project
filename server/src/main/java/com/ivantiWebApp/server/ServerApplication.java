package com.ivantiWebApp.server;

import com.ivantiWebApp.server.Model.ContentCreator;
import com.ivantiWebApp.server.Model.Item;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Model.User;
import com.ivantiWebApp.server.Repository.ContentCreatorRepository;
import com.ivantiWebApp.server.Repository.ItemRepository;
import com.ivantiWebApp.server.Repository.PackageRepository;
import com.ivantiWebApp.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableSwagger2
public class ServerApplication {


	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	// Example of dependency injection
	CommandLineRunner runner(UserRepository userRepo, ContentCreatorRepository contentRepo, PackageRepository packageRepo) {
		return args -> {
			User user1 = new User("Kendrik", "lamar", "kendrik@lamar.gov", "P4ssW0rdHash", LocalDateTime.now());

			ContentCreator cc1 = new ContentCreator(user1, "MicroSoft", "Engineer");
			Package package1 = new Package(cc1, "NuGet package", "MyFirstPackage");
			Package package2 = new Package(cc1, "Go package", "MySecondPackage");

//			userRepo.insert(user1);
//			contentRepo.insert(cc1);
//			packageRepo.insert(package1);
//			packageRepo.insert(package2);
		};
	}

}
