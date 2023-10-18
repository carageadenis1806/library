const myLibrary = [];

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
function addBookToLibrary () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    
    const book1 = new Book(title, author, pages);
    myLibrary.push(book1.info());

}


//adding an event listener to the button so the user can fill a form with the books properties
function openForm() {
    document.getElementById('formPop').style.display = 'flex';
    document.getElementById('formPop').style.flexDirection = 'column';
    document.getElementById('body').style.backgroundColor = '#787778';
    document.getElementById('body').style.opacity = '0.6';
    document.getElementById('cardSection').style.display = 'none';
    
}

function closeForm() {
    document.getElementById('formPop').style.display = 'none';
    document.getElementById('body').style.backgroundColor = '#ffffff';
    document.getElementById('body').style.opacity = '1';
    document.getElementById('cardSection').style.display = 'grid';
    addBookToLibrary();
    displayBooks();
}
const button = document.querySelector('.addButton');
const submitButton = document.querySelector('.submit');


    button.addEventListener('click', () => {
        openForm();
    });
    
   


submitButton.addEventListener('click', () => {
    closeForm();
});







    const cardSection = document.querySelector('.cardSection');
        const card = document.createElement('div');
//function that displays the array elements into the grid
function displayBooks () {
    for(let i = 0; i < myLibrary.length; i++) {
        cardSection.innerHTML = '';
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