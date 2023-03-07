// 实现搜索栏功能，需在form标签内添加id属性为"search-form"
const form = document.getElementById("search-form");
form.addEventListener("submit", e => {
	e.preventDefault();
	const searchInput = form.querySelector("input[type='text']");
	const searchTerm = searchInput.value.toLowerCase();
	const cols = document.querySelectorAll(".col");
	cols.forEach(col => {
		const title = col.querySelector("h2").textContent.toLowerCase();
		if (title.includes(searchTerm)) {
			col.style.display = "block";
		} else {
			col.style.display = "none";
		}
	});
});


function search() {
	let input = document.getElementById("search-form").value;
	let images = document.getElementsByClassName("column");
	for (let i = 0; i < images.length; i++) {
	if (images[i].innerText.toLowerCase().includes(input.toLowerCase())) {
	window.scrollTo(0, images[i].offsetTop);
	break;
	}
	}
	}

