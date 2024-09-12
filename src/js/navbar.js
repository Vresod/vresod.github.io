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
	select_active_page();
})();