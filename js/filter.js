const sectionContainer = document.querySelectorAll('#section-container');
const textColor = document.querySelectorAll('#text-color');
const expertContainer = document.getElementById('expert-container');
const serviceContaienr = document.getElementById('service-container');
const toggolerIcon = document.getElementById('toggoler-icon');


const dayNightFilter = () =>{
	sectionContainer.forEach((b)=>{
		b.classList.toggle('bg-light-dark');
	});
	textColor.forEach((t)=>{
		t.classList.toggle('text-light');
	});
	expertContainer.classList.toggle('our-expert-dark-bg');
	serviceContaienr.classList.toggle('service-product-dark-bg');
	toggolerIcon.classList.toggle('bg-white')
}