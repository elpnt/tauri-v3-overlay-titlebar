window.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((tab) =>
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			tabs.forEach((tab) => {
				tab.classList.remove("active");
			});
			e.currentTarget.classList.add("active");
		}),
	);
});
