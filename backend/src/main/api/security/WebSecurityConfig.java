package api.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/*
    Spring Configuration Class
    --
    Defines Security Filter chains, controling HTTP security behavior
    As it is, unsafe for production

    * Create safer class
*/
@Configuration // Marks the class as config component
public class WebSecurityConfig 
{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception 
    {
        // Disables CSRF protection
        http.csrf(csrf -> csrf.disable())
            // Allow request without authentication checks
            // For a public website, it's ok keep like that?
            .authorizeHttpRequests(auth -> auth
            .anyRequest().permitAll()
        );
        return http.build();
    }
}
