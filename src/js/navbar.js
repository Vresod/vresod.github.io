let select_active_page = () => {
	/*
	* Grabs the navbar link that corresponds to the currently active page and activates it
	*/
	let navlinks = document.querySelectorAll("a.nav-link, a.dropdown-item");
	for (let link of navlinks) {
		if (link.href != document.location.href) {
			continue;
		}
		link.classList.add("active");
		link.ariaCurrent = "page";
		// walk the node tree until we get to the parent element, so we can mark it as active as well
		if (link.classList.contains("dropdown-item")) {
			let navParent = link.parentElement;
			while (!navParent.classList.contains("nav-item")) {
				navParent = navParent.parentElement;
			}
			navParent.querySelector("a.nav-link").classList.add("active");
		}
	}
};

(() => { // this is the normal way of doing it but it feels like I'm writing lisp
	select_active_page();
	let cow = document.querySelector(".cow");
	cow.click_count = 0;
	let hamburger = document.querySelector(".hamburger");
	hamburger.click_count = 0;
	cow.addEventListener("click", () => {
		cow.click_count++;
		if (cow.click_count % 5 == 0) {
			cow.classList.toggle("rotated")
		}
	});
	hamburger.addEventListener("click", () => {
		hamburger.click_count++;
		if (hamburger.click_count >= 15) {
			hamburger.classList.add("burger-activated");
		}
	})
})();