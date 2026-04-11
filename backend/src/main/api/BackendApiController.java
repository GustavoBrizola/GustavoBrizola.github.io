package api;

import org.springframework.web.bind.annotation.*;
import java.time.Instant;
import java.util.Map;

/*
    This class is sending messages to frontend and diplaying it
    It Requires some request confirmation from another class
    The @RequestMapping("folder") allocates those messages and the frontend look for them
        Basicaly it's a root folder, 

    Useful when resquest for database information
*/
@RestController
// This is telling where the root folder for requests are using the URL/folder/...
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BackendApiController 
{
    private final ConnectionVerifier connectionVerifier;

    // Indicates the correct file path for request
    //@RequestMappting + Requestfolder + folder
    private final String requestfolder = "/request";

    public BackendApiController(ConnectionVerifier connectionVerifier) 
    {
        this.connectionVerifier = connectionVerifier;
    }

    // The GetMapping is defying where this specific request are, 
    // based on the @RequestMapping root folder
    @GetMapping(requestfolder+"/verify")
    // The function is verifiyng the connection
    public Map<String, String> verifyConnection() 
    {
        String message = connectionVerifier.verifyConnection();
        return Map.of
        (
                "status", "ok",
                "message", message,
                "timestamp", Instant.now().toString()
        );
    }

    // This send a message to frontend
    @GetMapping(requestfolder+"/data")
    public Map<String, Object> getData() 
    {
        connectionVerifier.logRequest("/api/request/data");
        return Map.of
        (
                "message", "Hello from the Spring Boot backend!",
                "timestamp", Instant.now().toString()
        );
    }

    // This sends information to front end
    @PostMapping(requestfolder+"/echo")
    public Map<String, Object> echo(@RequestBody Map<String, Object> payload) 
    {
        connectionVerifier.logRequest("/api/request/echo");
        return Map.of
        (
                "received", payload,
                "response", "Backend received your data successfully.",
                "timestamp", Instant.now().toString()
        );
    }
}
