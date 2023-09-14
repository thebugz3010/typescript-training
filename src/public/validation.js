document.addEventListener('DOMContentLoaded', () => {
	const emailInput = document.getElementById('email');
	const dynamicContent = document.getElementById('dynamicContent'); 

	emailInput.addEventListener('change', () => {
		fetch('/ajax-email')
		.then((response) => response.text())
		.then((data) => {
			dynamicContent.textContent = data;
		}).catch((error) => {
			console.error('Ajax error', error);
		});
	});
});
