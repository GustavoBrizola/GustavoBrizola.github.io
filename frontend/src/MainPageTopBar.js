
// @ts-ignore
import './MainPageTopBar.css';

export function createTopBar() 
{
    const nav = document.createElement('nav');
    nav.className = 'top-bar';
    nav.innerHTML = `
        <div class="top-bar-logo">
            Project-Fullstack
        </div>
        <div class="top-bar-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </div>
        <div>
            <button class="top-bar-button">This Button</button>
        </div>
    `;

    return nav;
}

export function renderTopBar() {
    const topBar = createTopBar();
    document.body.prepend(topBar);
}
