import Store from './Store.js'

const form = document.querySelector('form');
const list = document.querySelector('#list ul');
const store = new Store();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this.year.value);
    if(!this.year.value || !this.name.value || !this.rating.value) {
        alert('Il manque un champs');
        return;
    }

    store.addBook({
        name: this.name.value,
        year: this.year.value,
        rating: this.rating.value,
    })

    generateList();
    
    this.reset();
})

const generateList = () => {
    const books = store.getBooks();
    list.innerHTML = '';

    if(!books.length) {
        list.innerHTML = "Il n'y a pas de livres";
        return;
    }

    for(const book of books) {
        const li = document.createElement('li');
        li.innerText = `${book.title} - ${book.year} || ${book.rating}/10`
        list.appendChild(li);
    }
}

generateList();

document.getElementById('deleteAllBooks').addEventListener('click', () => {
    store.deleteBooks();
    generateList();
})