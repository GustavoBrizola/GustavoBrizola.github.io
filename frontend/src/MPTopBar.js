// Imports
// @ts-ignore
import './MPTopBar.css';

// all const and characteristics up here
const nav = document.createElement('nav');
nav.className = 'top-bar';

const logo = document.createElement('div');
logo.className = 'top-bar_logo'
logo.textContent = 'Project Full-Stack';

// How I would index commands of each button?
const sections = document.createElement('div');
sections.className = 'top-bar_sections'
sections.innerHTML = `
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Projects</a>
    <a href="#">Contacts</a>
`;

// Creates a button
const button = document.createElement('button');
button.className = 'top-bar_button';
button.textContent = 'Check Backend';

button.addEventListener('click', () => 
{
    alert("Hello World");
});

// Build the Topbar here, style on css of same name
export default
function MainPage_TopBar()
{
    // The the append position matters
    nav.appendChild(logo)
    nav.appendChild(sections);
    nav.appendChild(button);

    // Then address to body
    document.body.appendChild(nav);

    // Here are actions of each 
}