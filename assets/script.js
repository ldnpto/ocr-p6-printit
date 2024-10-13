const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector ("#banner .arrow_left");
let arrowRight = document.querySelector ("#banner .arrow_right");
console.log(arrowLeft);
console.log(arrowRight);

let currentSlideIndex = 0;

// Création des points
let nbDots = slides.length;
let dots = document.querySelector("#banner .dots");
console.log(dots);
for (let i = 0; i < nbDots; i++) {
	let dot = document.createElement("div");	
	dot.classList.add("dot");
	if (i == 0) {
		dot.classList.add("dot_selected");
	} 	
	dots.appendChild(dot);
}

function updateCurrentSlide(index) {
	console.log("updateCurrentSlide", index);
	let slide = slides[index];
	let image = document.querySelector(".banner-img");
	image.src = "./assets/images/slideshow/" + slide.image;
	let tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slide.tagLine;

	let dotsChildren = dots.children;
	console.log(dotsChildren);
	for (let i = 0; i < dotsChildren.length; i++) {
		let dot = dotsChildren[i];
		if (i == index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	}
}

arrowLeft.addEventListener("click", function() {
	console.log("click arrowLeft");
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	updateCurrentSlide(currentSlideIndex);
});

arrowRight.addEventListener("click", function() {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	updateCurrentSlide(currentSlideIndex);
	console.log("click arrowRight");
});

