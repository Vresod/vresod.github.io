import * as bootstrap from "bootstrap"

let setupCopyButtons = () => {
	let copyButtons = document.querySelectorAll(".copy-button");
	copyButtons.forEach(button => {
		let parent = button.parentElement;
		let popover = bootstrap.Popover.getInstance(parent);
		let initial_text = parent.getAttribute("data-bs-content");
		button.addEventListener('click', () => {
			navigator.clipboard.writeText(button.getAttribute("data-vd-copy"));
			popover.setContent({
				'.popover-body': 'Copied!'
			});
		});
		parent.addEventListener('hidden.bs.popover', () => {
			popover.setContent({
				'.popover-body': initial_text
			});
		})
	});
};

let contactFormSubmit = e => {
	const contactForm = document.querySelector("#contact-form")
	e.preventDefault(); // prevents page from reloading on submit
	let data = new URLSearchParams(new FormData(contactForm));
	try {
		fetch("https://api.vresod.xyz", {
			"method": "POST",
			"body": data,
		}).then(async response => {
			console.log(await response.json())
		})
	}
	catch (error) {
		console.error(error.message);
	}
}

(() => {
	// copied DIRECTLY from the bootstrap docs
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
	const contactForm = document.querySelector("#contact-form")
	// my turn now
	setupCopyButtons();
	contactForm.addEventListener("submit", contactFormSubmit)

})();