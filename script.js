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
          
        let information = '// ' + title + ' // '+ author + ' // ' + pages + '. ';
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

/*
removeButton.addEventListener('click', () => {
    card.remove();
    p.remove();
})
*/

function giveIndex(element) {
   let index = 0;
   for(i = 0; i < 0; i++) {
    index++;
    element.setAttribute('data',index);
   }

}

//function that displays the array elements into the grid
function displayBooks () {

    for(let i = 0; i < myLibrary.length; i++) {
        const removeButton = document.createElement('button');
        const p = document.createElement('p');
        const card = document.createElement('div');
        card.classList.add('card');
        p.textContent = myLibrary[i];
        p.classList.add('p');
        removeButton.classList.add('remove');
        removeButton.textContent = 'X';
        card.appendChild(p);
        card.appendChild(removeButton);
        cardSection.appendChild(card);

        
        
        giveIndex(card);
        removeButton.addEventListener('click', () => {
            myLibrary.splice(card.getAttribute('data'), 1);
            card.remove();
            p.remove();
        })

    }
    
}




// explenation for this: Then you can attach the addEventListener to the form variable and listen for a submit event. This event listener allows you to attach a callback function which gets triggered once the form is submitted:
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
  })