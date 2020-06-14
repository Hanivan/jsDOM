// DOM(Document Object Model)

	// DOM Selection Method
// document.getElementById() - method paling simpel & banyak digunakan - element
// getElementsByTagName() - Bisa banyak ID - HTMLColletion
// getElementsByClassName() - Class boleh dimiliki oleh satu elemen - HTMLCollection
	// jika tidak boleh merubah struktur html
// querySelector() - Method baru... - element
// querySelectorAll() - Mencari elemen berdasarkan selector, seperti CSS - nodeList


const judul = document.getElementById('judul'); //nama variabel dan ID tidak perlu sama
// manipulasi judul
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Hanivan'; // untuk mengubah isi text pada html

// document.getElementsByTagName()
const p = document.getElementsByTagName('p');

// jika ingin merubah semua elemen
for(let i = 0; i < p.length; i++){
	p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah menggunakan javascript';

// document.querySelector() = menanyakan mengenai selector(selector css)
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll()
const paragraft = document.querySelectorAll('p');
paragraft[2].style.backgroundColor = 'purple';

// jika ingin merubah semua elemen dengan looping
// for(let i = 0; i < paragraft.length; i++ ){
// 	paragraft[i].style.backgroundColor = 'purple';
// }

// merubah scope node root
const sectionB = document.getElementById('b');
const paragraft4 = sectionB.querySelector('p');
paragraft4.style.backgroundColor = 'yellow';
	// kalau mau dibalik
// const sectionB = document.querySelector('section#b');
// const paragraft4 = sectionB.getElementsByTagName('p')[0];
// paragraft4.style.backgroundColor = 'yellow';