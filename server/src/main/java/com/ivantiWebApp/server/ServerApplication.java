package com.ivantiWebApp.server;

import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Repository.PackageRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	// Example of dependency injection
	CommandLineRunner runner(PackageRepository repository) {
		return args -> {
			Package pack = new Package("d","d","s","s");

			repository.insert(pack);
		};
	}

}
