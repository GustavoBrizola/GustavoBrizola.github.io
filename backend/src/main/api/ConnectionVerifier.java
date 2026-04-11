package api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.boot.context.event.ApplicationReadyEvent;

@Service
public class ConnectionVerifier 
{
    private static final Logger logger = LoggerFactory.getLogger(ConnectionVerifier.class);

    public String verifyConnection() 
    {
        logger.info("Frontend verification request received. Connection is alive.");
        return "Backend is connected and verified";
    }

    public void logRequest(String endpoint) 
    {
        logger.info("Verified access for endpoint: {}", endpoint);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() 
    {
        logger.info("Backend service started and ready to accept frontend requests.");
    }
}
