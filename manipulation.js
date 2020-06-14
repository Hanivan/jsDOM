	// DOM manipulation method
// Manipulasi Element
 // - element.innerHTML
 // - element.style.<property>
 // - element.setAttribute()
 // - element.classList:
 		// - element.classList.add() = menambah kelas baru
 		// - element.classList.remove() = menghilangkan kelas yang ada
 		// - element.classList.toggle() = jika sebuah element tidak mempunyai kelas tertentu, toggle akan menambahkannya. Jika element tersebut sudah punya, toggle akan menghilangkan kelas tsb
 		// - element.classList.item() = mengetahui kelas tertentu
 		// - element.classList.contains() = mengecek kelas tertentu
 		// - element.classList.replace() = mengganti kelas yang ada dengan yang baru
	// Manipulasi Node = bisa menambahkan element baru, menghapus element, dan mengganti element tertentu jadi element baru (sangat erat kaitannya dengan manipulasi element)
 // - document.createElement() = membuat element baru
 // - document.createTextNode() = membuat isi dari element
 // - node.appendChild() = untuk menyimpan rangkaian yang sudah dibuat
 // - node.InsertBefore() = Hampir sama dengan appendChild
 // - parentNode.removeChild()
 // - parentNode.replaceChild()


	//tangkap attribute
// const judul = document.getElementById('judul');
	// ganti propertinya
// judul.innerHTML = '<em>Hanivan RS</em>';

	// ganti section A
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

	// ganti properti CSS dengan DOM
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

	// mengelola attribute(menambahkan attr)
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('class', 'Hanivan');
// console.log('classnya: ' + judul.getAttribute('class'));

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
	// mengetahui isi attr
// a.getAttribute('href');
	// output untuk console
// console.log('attribute dari a: ' + a.getAttribute('href'));
	// menghapus isi attr dari a
// a.removeAttribute('href');

	// menambahkan class baru
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
	// menghapus class
// p2.classList.remove('label');
	// toggle
// p2.classList.toggle('label'); // menambahkan, output: true
// p2.classList.toggle('label'); // menghapus, output: false

	// menambahkan style pada body dengan classList
// document.body.classList.toggle('biru-muda');

	// mengetahui nama kelas
// console.log(p2.classList.item(0)); //tuliskan indexnya
// console.log(p2.classList.contains('p2')); // mengecek class, outputnya: true

	// mengganti class
// p2.classList.add('test'); // menambahkan class baru
// p2.classList.replace('test', 'baru') // mengganti class test jadi kelas baru


	// DOM Manipulation

 // menambahkan paragraft baru (Buat element baru - rangkai elementnya - simpan ketempat yang seharusnya)

 	// appendChild = menyimpan diakhir element
 // buat element baru (p)
const pBaru = document.createElement('p');
 // membuat tulisannya
const teksPBaru = document.createTextNode('Paragraft Baru');
 // menyatukan rangkaian yang tadi dibuat
pBaru.appendChild(teksPBaru);
 // menyimpan rangkaian ke tempat seharusnya(akhir Section A)
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


	// beforeChild = menyimpan ditengah" element
 // membuat element li baru
const liBaru = document.createElement('li');
 // membuat tulisannya
const textLiBaru = document.createTextNode('item baru');
 // menggabungkan li baru dan tulisan
liBaru.appendChild(textLiBaru);
 // mengambil parent
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
 // menyimpan di tempat sebenarnya
ul.insertBefore(liBaru, li2); // butuh 2 parameter, node baru dan element sebelumnya


	// remove element = harus tahu parentnya siapa, element yang akan diremove
 // tangkap parent
// tangkap secton
 // tangkap a
const link = document.getElementsByTagName('a')[0];
 // menghapus
sectionA.removeChild(link);

	// replace paragraft 4
 // tangkap parent p4
const sectionB = document.getElementById('b');
 // tangkap element yang mau di replace
const p4 = sectionB.querySelector('p');
 // membuat element baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
 // replace
sectionB.replaceChild(h2Baru, p4); // menerima 2 parameter: node baru mereplace node lama


	// menandai element baru dibuat
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';


	// methode baru pada Manipulasi Node
// - parentNode.append() = menambahkan element di akhir parent
// - parentNode.prepend() = di awal parent
// - childNode.before() 
// - childNode.after()
// - childNode.remove()
// - childNode.replaceWith()