import * as bootstrap from "bootstrap"

(() => {
	// copied DIRECTLY from the bootstrap docs
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

	// my turn now
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
})();