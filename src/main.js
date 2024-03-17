// Dom elements 
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let img = document.querySelector('#img');
let job = document.getElementById('job'),
	title = document.getElementById('title'),
	text = document.getElementById('text');

let statusImg = true;
// prepare next button
nextBtn.addEventListener('click', () => {
	preparationInfo(statusImg);
	if (statusImg) {
		img.src = '../images/image-tanya.jpg';
		statusImg = false;
	} else {
		img.src = '../images/image-john.jpg';
		statusImg = true;
	}
	
})
// prepare previous button
prevBtn.addEventListener('click', () => {
	preparationInfo(statusImg);
	if (statusImg) {

		img.src = '../images/image-tanya.jpg';
		statusImg = false;
	} else {
		img.src = '../images/image-john.jpg';
		statusImg = true;
	}
	
})
// change text info , name and job title
function preparationInfo(caseImg) {

	if (caseImg) {
		job.innerHTML = `
		UX Engineer
		`;
		text.innerHTML = `
		“ I’ve been interested in coding for a while but never taken the jump, until now.
		I couldn’t recommend this course enough. I’m now in the job of my dreams and so
		excited about the future. ”
		`;
		title.innerHTML = `Tanya Sinclair`;
	} else {
		job.innerHTML = `
		Junior Front-end Developer
		`;
		text.innerHTML = `
		“ If you want to lay the best foundation possible I’d recommend taking this course.
          The depth the instructors go into is incredible. I now feel so confident about
          starting up as a professional developer. ”
		`;
		title.innerHTML = `John Tarkpor`;
	}

}