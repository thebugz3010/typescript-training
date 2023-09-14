document.addEventListener('DOMContentLoaded', () => {
	const emailInput = document.getElementById('email');
	const dynamicContent = document.getElementById('dynamicContent'); 

	emailInput.addEventListener('change', () => {
		const postData = {
			email: emailInput.value
		};
		fetch('/ajax-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		})
		.then((response) => response.text())
		.then((data) => {
			dynamicContent.textContent = data;
		}).catch((error) => {
			console.error('Ajax error', error);
		});
	});
});
