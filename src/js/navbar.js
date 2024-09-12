import fs from "fs";
import path from "path";
import navbar_code from 'bundle-text:../navbar.html'

let insert_navbar = () => {
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