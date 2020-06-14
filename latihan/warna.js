 // tangkap tag tombol
const tUbahWarna = document.getElementById('tUbahWarna');
//document.body; // tangkap body, opsional, tdk dipakai juga gpp
 // dengarkan event tombol
tUbahWarna.onclick = function(){
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
}

	// membuat tombol warna random dengan manipulasi node
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
 // lengkapi tombolnya dengan type button
tAcakWarna.setAttribute('type', 'button');
 // pakai fungsi baru (tangkap button di html)
tUbahWarna.after(tAcakWarna); // displaynya inline
 // kasih event
tAcakWarna.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

	// Kasus 3
 // tangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

 // sMerah
sMerah.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)';
});
 // sHijau
sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)';
});
 // sBiru
sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



	// kasus 4 bermain dengan kursor
 // tangkap body
document.body.addEventListener('mouseover', function(event){
	// posisi mouse
	// console.log(event.clientX);
	// ukuran browser
	// console.log(window.innerWidth);
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	// console.log(xPos);
	const yPos = Math.round((event.clientY / window.innerWidth) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',1)';
});