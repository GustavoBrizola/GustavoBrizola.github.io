import BackendCheck from './api/CheckBackend.js';

import MainPage_TopBar from './MPTopBar.js';

// Tasks before everything
BackendCheck(false);

// Import from other JS's and build the site
// Note Actions must be placed on their respective files
MainPage_TopBar();

