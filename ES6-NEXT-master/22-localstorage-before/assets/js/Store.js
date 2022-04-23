export default class Store {
    books = [];
    getBooks() {
        let books 
        if(localStorage.getItem("books") === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
            // je récupére et je parse(coverti en tableau/object )
        }     
        return books;
    }

    addBook({ name, year, rating }) {
        const  books = this.getBooks();
        books.push({
            title: name,
            year,
            rating
        })
        // console.log(books);
        localStorage.setItem("books", JSON.stringify(books)) //je set les livres et je les convertis en string
    }

    deleteBooks() {
        localStorage.removeItem('books'); 
    }
}