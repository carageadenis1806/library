const myLibrary = [];
const form = document.querySelector('.form');
const formPop = document.querySelector('.formPop');
const cardSection = document.querySelector('.cardSection');
const button = document.querySelector('.addButton');
const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
//constructor
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function () {
        let information = title + ' / ' + author + ' / ' + pages + '. ';
        return information;
    }
}


//take user’s input and store the new book objects into the array.
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    
    const book1 = new Book(title, author, pages);
    myLibrary.push(book1.info());
    displayBooks();

}


//open form
button.addEventListener('click', () => {
        formPop.classList.add('active');
        button.classList.add('buttonRemove');
        header.classList.add('activeBody');
        main.classList.add('activeBody');
        footer.classList.add('activeBody');
        cardSection.innerHTML = '';
});
    
   

//close form
submitButton.addEventListener('click', () => {
    formPop.classList.remove('active');
    button.classList.remove('buttonRemove');
    header.classList.remove('activeBody');
    main.classList.remove('activeBody');
    footer.classList.remove('activeBody');
    addBookToLibrary();
    form.reset();
});






//function that displays the array elements into the grid
function displayBooks () {
    for(let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = myLibrary[i];
        cardSection.appendChild(card);
    }
    
}




// explenation for this: Then you can attach the addEventListener to the form variable and listen for a submit event. This event listener allows you to attach a callback function which gets triggered once the form is submitted:
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
  })