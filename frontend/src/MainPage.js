import BackendCheck from './api/CheckBackend.js';
import { renderTopBar } from './MainPageTopBar.js';

// Tasks before
BackendCheck(false).catch((err) => 
{
  console.error('Backend check failed:', err);
});

// Import from other JS's and build the site
renderTopBar();

