// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Only runs in development and will be stripped in production builds.
if (process.env.NODE_ENV !== 'production') {
	let footer = document.querySelector(".footer-statement");
	footer.innerHTML += "<p class='fs-1'>DEVELOPMENT BUILD</p>";
}