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
	const contactForm = document.querySelector("#contact-form");
	const successIndicator = document.querySelector("#form-success-indicator");
	e.preventDefault(); // prevents page from reloading on submit
	let data = new URLSearchParams(new FormData(contactForm));
	try {
		fetch("https://api.vresod.xyz", {
			"method": "POST",
			"body": data,
		}).then(async response => {
			// Let the user know the email was sent, or that it wasn't
			let json = await response.json()
			successIndicator.classList.remove("border-success", "text-success")
			successIndicator.classList.remove("border-danger", "text-danger")
			if (!response.ok) {
				console.error(json);
				successIndicator.classList.add("border-danger", "text-danger")
				successIndicator.textContent = json.error.message || json.response || response.status;
			} else {
				successIndicator.classList.add("border-success", "text-success")
				successIndicator.textContent = "Email sent successfully!"
			}
			successIndicator.classList.add("show")
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
	// my turn now
	const contactForm = document.querySelector("#contact-form");
	setupCopyButtons();
	contactForm.addEventListener("submit", contactFormSubmit);

})();