import { getCurrentWindow } from "@tauri-apps/api/window";

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

	const window = getCurrentWindow();
	document
		.querySelector(".toggle-simple-fullscreen input")
		.addEventListener("change", (e) => {
			if (e.target.checked) {
				void window.setSimpleFullscreen(true);
			} else {
				void window.setSimpleFullscreen(false);
			}
		});
});
