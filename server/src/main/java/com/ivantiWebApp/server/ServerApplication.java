package com.ivantiWebApp.server;

import com.ivantiWebApp.server.Model.*;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Repository.*;
import org.apache.tomcat.jni.Local;
import org.bson.codecs.jsr310.LocalDateTimeCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableSwagger2
public class ServerApplication {


	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	/*@Bean
	CommandLineRunner init(RoleRepository roleRepository, UserRepository userRepository, ContentCreatorRepository contentCreatorRepository, PackageRepository packageRepository, CategoryRepository categoryRepository) {

		return args -> {

			Role adminRole = roleRepository.findByRole("ADMIN");
			if (adminRole == null) {
				Role newAdminRole = new Role();
				newAdminRole.setRole("ADMIN");
				roleRepository.save(newAdminRole);
			}

			LocalDateTime date = LocalDateTime.now();
			User user = new User("Ahmed", "Alharthy", "ahmedalharthy@ivanti.nl", "camel", date);

			ContentCreator contentCreator = new ContentCreator(user, "Ubisoft", "IT Analyst");
			Category category = new Category("sye4623hkgozgdb5h2", "Android");
			Package packageIvanti = new Package(contentCreator, "Anabonda", "Snake analyzer", category);

			userRepository.save(user);
			categoryRepository.save(category);
			contentCreatorRepository.save(contentCreator);
			packageRepository.save(packageIvanti);

		};

	}*/

}
