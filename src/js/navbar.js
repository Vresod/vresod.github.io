import fs from "fs";
import path from "path";

let insert_navbar = () => {
	// uses some parcel funny business to insert the navbar
	let navbar_code = fs.readFileSync(path.join(__dirname, "../navbar.html"), 'utf8');
	const logo_url = new URL("../assets/fullsize_icon.png", import.meta.url);
	console.log(logo_url);
	navbar_code = navbar_code.replace('assets/fullsize_icon.png', logo_url.pathname);
	let navbar_div = document.querySelector("div#insert_navbar");
	navbar_div.outerHTML = navbar_code;
}

let select_active_page = () => {
	/*
	* Grabs the navbar link that corresponds to the currently active page and activates it
	*/
	let navlinks = document.querySelectorAll("a.nav-link");
	navlinks.forEach(link => {
		if(link.href == document.location.href){
			link.classList.add("active");
			link.ariaCurrent = "page";
		}
	});
};

(() => { // this is the normal way of doing it but it feels like I'm writing lisp
	insert_navbar();
	select_active_page();
})();