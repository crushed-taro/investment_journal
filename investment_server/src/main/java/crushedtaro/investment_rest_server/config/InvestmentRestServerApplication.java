package crushedtaro.investment_rest_server.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("crushedtaro.investment_rest_server")
@EntityScan(basePackages = "crushedtaro.investment_rest_server")
@EnableJpaRepositories(basePackages = "crushedtaro.investment_rest_server")
public class InvestmentRestServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentRestServerApplication.class, args);
	}

}
