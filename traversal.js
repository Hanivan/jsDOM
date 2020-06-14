	// DOM Travesal = Mirip silsilah keluarga
// 1. menyeleksi dom selection dulu
// 2. memilih element lain berdasarkan element yang diseleksi tadi

	// Traversal Method
// parentNode - node
// parentElement - element
// nextSibling = sodara kandung - node
// nextElementSibling - element
// previousSibling - node
// previousElementSibling - element



// Event Handling
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// close.addEventListener('click', function(){
// 	card.style.display = 'none';
// });

	// DOM Traversal
// ambil semua tombol close
// const close = document.querySelectorAll('.close'); // menghasilkan array, isinya sesuai dengan element

// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(e){
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

// close.forEach(function(el){
// 	el.addEventListener('click', function(e){
// 		e.target.parentElement.style.display = 'none'; // dom traversal
// 		e.preventDefault();
// 		e.stopPropagation(); // event bubbling
// 	});
// });

	// preventDefault() = menghentikan aksi default yang dilakukan oleh sebuah element
	// EventBubbling

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
// 	card.addEventListener('click', function(){
// 		alert('ok');
// 	});
// });


	// ambil container
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
	if(e.target.className == 'close'){
		e.target.parentElement.style.display = 'none';
		e.preventDefault(); // untuk menghilangkan fungsi href pada tag a
	}
})