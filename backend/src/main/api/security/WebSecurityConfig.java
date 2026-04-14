package api.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;
import java.util.List;

/*
    Spring Configuration Class
    --
    Defines Security Filter chains, controlling HTTP security behavior

*/
@Configuration // Marks the class as config component
public class WebSecurityConfig 
{
    // Gets the frontend URL fron .properties
    @Value("${frontend.server}")
    private String Origins;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception 
    {
        // Enable CSRF protection with a cookie-based repository for SPAs
        http.csrf(csrf -> csrf.csrfTokenRepository(org.springframework.security.web.csrf.CookieCsrfTokenRepository.withHttpOnlyFalse()))
            // Enable CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            // Restrict access: permit only specific public endpoints, require auth for others
            .authorizeHttpRequests(auth -> auth
                // Determines the public endpoints access
                // SUGGESTION: CREATE A LIST OF ENDPOINT PERMITS
                .requestMatchers("/api/public/**", "/api/request/**")
                .permitAll() 
                .anyRequest()
                .authenticated()
        );
            
        return http.build();
    }

    // Sets CORS to accept requests from specific port
    @Bean
    public CorsConfigurationSource corsConfigurationSource() 
    {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(Origins));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Content-Type", "Authorization", "X-Requested-With", "Accept", "X-XSRF-TOKEN"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
