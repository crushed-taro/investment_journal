package crushedtaro.investment_rest_server.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("crushedtaro.investment_rest_server")
public class InvestmentRestServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentRestServerApplication.class, args);
	}

}
