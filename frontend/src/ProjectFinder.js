/**
    Project Finder
    ---
    Go into the projects folder looking for each any existing project

    * Looks for a specific .JSON in those folders
    * Process algorithm
        * That file contains information about the project
            * Internal Name
            * Public Name
            * Public Image
            * Launch Date
            * Public Description
            * Starter file directory
            * URL - for access
            * Internal Notes
    * Once process is done, groups into array of length equals the amount of folders located
    * MainPage.js reads the array and organizes in a grid, displaying on main site

    * In case of not find the file nor complete the task will not fill the space on array
        * Cases that might happen
            * Take to much time to process
            * No file on directory
            * Missing data in file

    * @returns Array with contents
**/
export default 
function ProjectFinder()
{
    const projectDir = "./projects";
    
    // TODO: Implement project discovery logic
    return [];
}
