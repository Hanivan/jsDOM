	// Event != Even
// event pada javascript mempresentasikan sebuah kejadian yang terjadi di dalam DOM, kejadian tersebut bisa dilakukan oleh user(mouse event, keyboard event, dll) ataupun dilakukan secara otomatis oleh API(animasi selesai dijalankan, halaman selesai diload, dll)

	// Cara 'mendengarkan' event
// Event Handler = perubahan yang terakhir dilakukan akan menimpa sebelumnya
// - Inline HTML attribute => tidak disarankan
// - Element method
// addEventListener() = akan menambah perubahan

 // ubah paragraft 2: onClick
// const p2 = document.querySelector('.p2');
// function ubahWarnaP2(){
// 	p2.style.backgroundColor = 'lightblue';	
// }
// p2.onclick = ubahWarnaP2;

	// Event Handler: onClick
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3(){
// 	p3.style.backgroundColor = 'purple';	
// }
// p3.onclick = ubahWarnaP3;


	// addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('item baru');
// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// }); //tulis 2 parameter


	// event handler
const p3 = document.querySelector('.p3');
// p3.onclick = function(){
// 	p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
// 	p3.style.color = 'red';
// }

	// eventListener
// const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function(){
	p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function(){
	p3.style.backgroundColor = 'white';
})
p3.addEventListener('click', function(){
	p3.style.color = 'red';
});


// Daftar lengkap event
// - Mouse Event: click, dblclick, mouseover, mouseenter, mouseleave, mouseup,wheel
// - Keyboard Event: keydown, keypress, keyup
// - Resources Event
// - Focus Event
// - View Event: resize, scroll
// - Form Event: reset, submit
// - CSS Animation & Transition Event
// - Drag & Drop Event