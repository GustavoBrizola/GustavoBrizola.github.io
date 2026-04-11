package projects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

// Components ensures 
@SpringBootApplication
@ComponentScan(basePackages = {"/api"})
public class BackendApplication 
{
    public static void main(String[] args) 
    {
        SpringApplication.run(BackendApplication.class, args);
    }
}