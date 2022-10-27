import { renderMovieList } from './movies.js';
const filtered = document.getElementById('filtered');
const favoriteBtn = document.querySelector('.favorite');
// create an element
export function createAnElement(type, content, attribute, appender) {
    const el = document.createElement(type);

    if (type == 'button') {
        el.textContent = "Preview"
        el.setAttribute('class', attribute);
        el.addEventListener('click', fetchData);
    } else if (type == 'label'){
        el.setAttribute('for', content);
        el.textContent = content;
    } else if (type == 'input') {
        el.setAttribute('type', attribute);
        el.name = content
    } 
    
    if (appender) {
        appender.appendChild(el);
    }
    return el;
}

// check the checked movies
function fetchData() {


    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);
    });
    filtered.style.display = 'flex';
    const cardList = filtered.querySelector('.all-cards');
    cardList.innerHTML = '<div><p>Loading...</p></div>'
    favoriteBtn.style.display = 'block';
    renderMovieList(values)

    // check for unchecked == 0
};