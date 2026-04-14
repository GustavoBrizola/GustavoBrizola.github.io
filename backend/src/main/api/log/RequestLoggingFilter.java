package api.log;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

/*
    Request Logging Filter
    ---
    Captures and logs detais incoming from HTTP requests
    Intecepts requests before reach controllers and files on log
        Might interesting to check some suspicious activities

    The whle operation of this does not intefer on the request process
    Only catch requests
*/
@Component
public class RequestLoggingFilter extends OncePerRequestFilter 
{
    private static final Logger logger = LoggerFactory.getLogger(RequestLoggingFilter.class);

    // This extracts requests details
    // you can get a bunch of information of the request parameter
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException 
    {
        String method = request.getMethod();
        String uri = request.getRequestURI();
        String queryString = request.getQueryString();
        String remoteAddr = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String requestnum = request.getRequestId();

        // Prints on Spring Boot terminal request information, following the pattern
        // Also usable when creating .log file
        logger.info("[ACCESS] request {}: {} {}{} from {} user-agent={} {}",
                requestnum,        
                method,
                uri,
                queryString != null ? "?" + queryString : "",
                remoteAddr,
                userAgent
        );

        filterChain.doFilter(request, response);
    }
}
