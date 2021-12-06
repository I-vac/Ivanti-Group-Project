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

	@Bean
	CommandLineRunner init(RoleRepository roleRepository, UserRepository userRepository, ContentCreatorRepository contentCreatorRepository, PackageRepository packageRepository, CategoryRepository categoryRepository) {

		return args -> {

			Role adminRole = roleRepository.findByRole("ADMIN");
			if (adminRole == null) {
				Role newAdminRole = new Role();
				newAdminRole.setRole("ADMIN");
				roleRepository.save(newAdminRole);
			}

			/*LocalDateTime date = LocalDateTime.now();
			User user = new User("Ivaylo", "Nikolov", "ivaylonikolov@ivanti.nl", "balkan", date);

			ContentCreator contentCreator = new ContentCreator(user, "Microsoft", "Developer");
			Package packageIvanti = new Package(contentCreator, "Speed Test", "Test your connection/network speed");

			userRepository.save(user);
			contentCreatorRepository.save(contentCreator);
			packageRepository.save(packageIvanti);*/

			//Category category = new Category();

		};

	}

}
