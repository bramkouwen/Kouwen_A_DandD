(() => {
	// collect the buttons at the bottom of the page
let theThumbnails = document.querySelectorAll("#buttonHolder img"),
	gameBoard = document.querySelector(".puzzle-board"), 
	pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone');

function changeBgImg() {
	// debugger;
	gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
}

function allowDrag(event) {
	console.log('started draggin me');

	event.dataTransfer.setData('daggedEl', this.id);
}

function allowDragOver(event) {
	event.preventDefault();
	console.log('started draggin over me');
}

function allowDrop(event) {
	event.preventDefault();
	console.log('dropped on me');

	let droppedElId = event.dataTransfer.getData('daggedEl');

	this.appendChild(document.querySelector(`#${droppedElId}`));
}

// add event handling here 

theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));

pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
	zone.addEventListener('dragover', allowDragOver);
	zone.addEventListener('drop', allowDrop);
});
})();
